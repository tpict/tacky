import { createMacro } from "babel-plugin-macros";
import { Expression } from "@babel/types";
import generate from "@babel/generator";
import { parseExpression } from "@babel/parser";
import { nanoid } from "nanoid";

import { tackyArg as _, compile } from "./index";
import type { Tacky } from "./index";

const macro = createMacro(({ babel, references }) => {
  const t = babel.types;
  const { tacky = [] } = references;

  tacky.forEach(path => {
    const functionPath = path.parentPath;
    if (!functionPath.isCallExpression()) {
      // Tacky wasn't called
      return;
    }

    const args = functionPath.get("arguments");
    if (!Array.isArray(args)) {
      // When does this ever happen?
      return;
    }

    const callback = args[0];
    if (
      !callback.isArrowFunctionExpression() &&
      !callback.isFunctionExpression()
    ) {
      // Function wasn't declared inline, or invalid call
      // TODO: handle former case
      return;
    }

    const stylesArray = callback.get("body");
    if (Array.isArray(stylesArray) || !stylesArray.isArrayExpression()) {
      // Array wasn't declared inline, or invalid function body
      // TODO: handle former case
      return;
    }

    const tackyParam = callback.node.params[0];
    if (tackyParam.type !== "Identifier") {
      // Called in an odd way. Is there any reason to do this?
      return;
    }

    const tackyParamName = tackyParam.name;
    const idToOldNodeMap: Record<string, Expression> = {};

    // First, pre-evaluate as much as possible.
    stylesArray.traverse({
      CallExpression: {
        exit(path) {
          // Check that we're calling a Tacky helper
          const callee = path.get("callee");
          if (!callee.isMemberExpression()) {
            return;
          }

          // Go backwards through property accesses until we reach the "root".
          // This is to handle e.g. _.media.minWidth(...)
          let calleeIdentifier = callee.get("object");
          while (
            !Array.isArray(calleeIdentifier) &&
            calleeIdentifier.isMemberExpression()
          ) {
            calleeIdentifier = calleeIdentifier.get("object");
          }

          if (
            Array.isArray(calleeIdentifier) ||
            !calleeIdentifier.isIdentifier()
          ) {
            return;
          }

          if (calleeIdentifier.node.name !== tackyParamName) {
            // Someone else's code, don't touch it
            return;
          }

          // For each arg, replace any non-literal expression with a string ID
          path.get("arguments").forEach(argPath => {
            const node = argPath.node;
            if (node.type !== "Identifier") {
              return node;
            }

            const id = nanoid();
            idToOldNodeMap[id] = node;
            argPath.replaceWith(t.stringLiteral(id));
          });

          // Replace Tacky param name with "this" so we can give the eval
          // call the relevant context
          calleeIdentifier.replaceWith(t.identifier("this"));

          // Evaluate the function and insert into AST
          const code = generate(path.node).code;

          function evalInContext(): string {
            return JSON.stringify(eval(code));
          }

          const evaluationResult = evalInContext.call(_);
          const newNode = parseExpression(evaluationResult);

          path.replaceWith(newNode);
        },
      },
    });

    // stylesArray should no longer have runtime dependencies, so we can
    // compile it to a styles object (keeping any escaped expressions).
    const generatedStyles = eval(generate(stylesArray.node).code);
    const compiledStyles = JSON.stringify(compile(eval(generatedStyles)));
    const compiledAst = parseExpression(compiledStyles);
    functionPath.replaceWith(compiledAst);

    // Go back and insert expressions back into the AST.
    functionPath.traverse({
      StringLiteral(path) {
        for (const [id, node] of Object.entries(idToOldNodeMap)) {
          const split = path.node.value.split(id);
          if (split.length === 1) {
            return;
          }

          if (split[0] === "" && split[1] === "") {
            // No interpolation required in this case.
            path.replaceWith(node);
          } else {
            // Otherwise, insert the expression into a template literal.
            const head = t.templateElement(
              { raw: split[0], cooked: split[0] },
              false
            );
            const tail = t.templateElement(
              { raw: split[1], cooked: split[1] },
              true
            );

            path.replaceWith(t.templateLiteral([head, tail], [node]));
          }

          // Each ID should only appear once in the AST so there's no need to
          // check for this one again.
          delete idToOldNodeMap[id];

          break;
        }
      },
    });
  });
});

export const tacky: Tacky = (undefined as unknown) as Tacky;

const macroExport: never = macro as never;
export default macroExport;
