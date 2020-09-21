import * as fs from "fs";
import * as MDNProperties from "mdn-data/css/properties.json";
import * as MDNSyntaxes from "mdn-data/css/syntaxes.json";
import {
  Term,
  resolveSyntax,
  TermType,
  ComposedTerm,
  DataTypeTerm,
  MethodTerm,
  BracketsTerm,
  TermMultiplier,
  TermCombinator,
} from "css-syntax-parser";
import ts, { factory, SyntaxKind } from "typescript";
import "lodash.combinations";
import _ from "lodash";

const CSS_HASH_MARK_MULTIPLIER_LIMIT = 3;

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

const getAllCombinations = <T extends unknown[]>(arr: T): T[] => {
  if (arr.length >= 10) {
    throw new Error(
      `getAllCombinations received oversize input: ${JSON.stringify(arr)}`
    );
  }
  return arr.flatMap((_e, idx) => _.combinations(arr, idx + 1));
};

declare module "lodash" {
  export interface LoDashStatic {
    pascalCase(string?: string): string;
    combinations<T extends unknown[]>(arr: T, n: number): T[];
  }
}

const sourceFile = ts.createSourceFile(
  "build/tacky.ts",
  "",
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

class Namespace {
  private readonly name: string;
  private readonly isPrivate: boolean;
  private readonly nodes: ts.Statement[];
  private readonly mapping: Record<string, ts.TypeReferenceNode>;
  static readonly all: Namespace[] = [];

  constructor(name: string, isPrivate: boolean) {
    this.name = name;
    this.isPrivate = isPrivate;
    this.nodes = [];
    this.mapping = {};
    Namespace.all.push(this);
  }

  push(name: string, expression: ts.TypeNode): void {
    const formattedName = _.pascalCase(name);

    if (this.mapping[formattedName]) {
      return;
    }

    const node = factory.createTypeAliasDeclaration(
      undefined,
      [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createIdentifier(formattedName),
      undefined,
      expression
    );

    this.nodes.push(node);

    this.mapping[formattedName] = factory.createTypeReferenceNode(
      factory.createQualifiedName(
        factory.createIdentifier(this.name),
        factory.createIdentifier(formattedName)
      )
    );
  }

  retrieve(name: string): ts.TypeReferenceNode {
    const formattedName = _.pascalCase(name);
    return this.mapping[formattedName];
  }

  get node(): ts.ModuleDeclaration {
    return factory.createModuleDeclaration(
      undefined,
      this.isPrivate
        ? [ts.createModifier(ts.SyntaxKind.ExportKeyword)]
        : undefined,
      factory.createIdentifier(this.name),
      factory.createModuleBlock(this.nodes),
      ts.NodeFlags.Namespace
    );
  }
}

const dataTypeNamespace = new Namespace("DataType", false);
const methodNamespace = new Namespace("Method", false);
const propertyNamespace = new Namespace("Property", true);

const lengthUnits = ["px", "rem"];
const timeUnits = ["s", "ms"];
const angleUnits = ["deg", "rad"];
const resolutionUnits = ["dpi", "dpcm"];

const createUnit = (symbol: string): ts.TypeNode =>
  factory.createTemplateLiteralType(factory.createTemplateHead("", ""), [
    factory.createTemplateLiteralTypeSpan(
      ts.TemplateCasing.None,
      factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      factory.createTemplateTail(symbol, symbol)
    ),
  ]);

[lengthUnits, timeUnits, angleUnits, resolutionUnits].flat().forEach(unit => {
  dataTypeNamespace.push(_.upperFirst(unit), createUnit(unit));
});

[
  ["length", lengthUnits] as const,
  ["time", timeUnits] as const,
  ["angle", angleUnits] as const,
  ["resolution", resolutionUnits] as const,
].forEach(([typeName, units]) => {
  dataTypeNamespace.push(
    typeName,
    factory.createUnionTypeNode(
      units.map(unit =>
        factory.createTypeReferenceNode(
          factory.createIdentifier(_.upperFirst(unit)),
          undefined
        )
      )
    )
  );
});

dataTypeNamespace.push("percentage", createUnit("%"));
dataTypeNamespace.push(
  "number",
  factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
);
dataTypeNamespace.push(
  "string",
  factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
);

// TODO: the MDN syntax is invalid
dataTypeNamespace.push(
  "line-names",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);

// TODO: Not sure if this is OK. The validation is fine but it would be poor
// practice to coerce integer numbers to BigInt just for type checking.
dataTypeNamespace.push(
  "integer",
  factory.createKeywordTypeNode(ts.SyntaxKind.BigIntKeyword)
);

// TODO
dataTypeNamespace.push(
  "custom-ident",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "hex-color",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "url",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "ratio",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "x",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "y",
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);
dataTypeNamespace.push(
  "number [1,1000]", // ?????
  factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
);

dataTypeNamespace.push(
  "length-percentage",
  factory.createUnionTypeNode([
    dataTypeNamespace.retrieve("length"),
    dataTypeNamespace.retrieve("percentage"),
  ])
);

const createMethod = (term: MethodTerm): ts.TypeReferenceNode => {
  if (methodNamespace.retrieve(term.name)) {
    return methodNamespace.retrieve(term.name);
  }

  methodNamespace.push(
    term.name,
    factory.createTemplateLiteralType(
      factory.createTemplateHead(`${term.name}(`, `${term.name}(`),
      [
        factory.createTemplateLiteralTypeSpan(
          ts.TemplateCasing.None,
          // TODO tighten this up
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          factory.createTemplateTail(")", ")")
        ),
      ]
    )
  );

  return methodNamespace.retrieve(term.name);
};

const createDataType = (
  term: DataTypeTerm
):
  | ts.TypeReferenceNode
  | ts.UnionTypeNode
  | ts.KeywordTypeNode<ts.KeywordTypeSyntaxKind> => {
  if (dataTypeNamespace.retrieve(term.name)) {
    return dataTypeNamespace.retrieve(term.name);
  }

  if (propertyNamespace.retrieve(term.name)) {
    return propertyNamespace.retrieve(term.name);
  }

  let syntax = MDNSyntaxes[term.name as keyof typeof MDNSyntaxes]?.syntax;
  let currentNamespace = dataTypeNamespace;

  if (!syntax) {
    syntax = MDNProperties[term.name as keyof typeof MDNProperties]?.syntax;
    currentNamespace = propertyNamespace;
  }

  if (!syntax) {
    throw new Error(`Unknown syntax "${term.name}"`);
  }

  const resolvedSyntax = resolveSyntax(syntax);
  if (resolvedSyntax.type === TermType.METHOD) {
    currentNamespace = methodNamespace;
  }

  const parsedSyntax = createSyntax(resolvedSyntax);

  if (!parsedSyntax) {
    throw new Error(`Got null node for data-type ${term.name}`);
  }

  currentNamespace.push(term.name, parsedSyntax);

  return currentNamespace.retrieve(term.name);
};

const createRangeMultiplier = (
  type: ts.TypeNode,
  min: number,
  max: number
): ts.TypeNode => {
  if (min === 0) {
    // TODO handle this correctly
    min = 1;
  }

  return factory.createUnionTypeNode(
    _.range(min, max + 1).map(n => {
      if (n === 1) {
        return type;
      }

      return factory.createTemplateLiteralType(
        factory.createTemplateHead("", ""),
        _.range(n).map(count =>
          factory.createTemplateLiteralTypeSpan(
            ts.TemplateCasing.None,
            type,
            count < n - 1
              ? factory.createTemplateMiddle(" ", " ")
              : factory.createTemplateTail("", "")
          )
        )
      );
    })
  );
};

const createBrackets = (term: BracketsTerm): ts.TypeNode => {
  const type = createSyntax((term as BracketsTerm).content);

  if (!type) {
    throw new Error("Failed to parse bracket syntax");
  }

  if (term.multiplier === undefined) {
    return type;
  }

  if (term.multiplier === TermMultiplier.RANGE) {
    const { min, max } = term.range;
    if (min === undefined || max === undefined) {
      throw new Error("Received range multiplier with missing limits");
    }

    return createRangeMultiplier(type, min, max);
  }

  if (term.multiplier === TermMultiplier.LIST) {
    return factory.createUnionTypeNode(
      _.range(1, CSS_HASH_MARK_MULTIPLIER_LIMIT + 1).map(n => {
        if (n === 1) {
          return type;
        }

        return factory.createTemplateLiteralType(
          factory.createTemplateHead("", ""),
          _.range(n).map(count =>
            factory.createTemplateLiteralTypeSpan(
              ts.TemplateCasing.None,
              type,
              count < n - 1
                ? factory.createTemplateMiddle(", ", ", ")
                : factory.createTemplateTail("", "")
            )
          )
        );
      })
    );
  }

  if (term.multiplier === TermMultiplier.ZERO_OR_MORE) {
    return createRangeMultiplier(type, 0, CSS_HASH_MARK_MULTIPLIER_LIMIT);
  }

  if (term.multiplier === TermMultiplier.ONE_OR_MORE) {
    return createRangeMultiplier(type, 1, CSS_HASH_MARK_MULTIPLIER_LIMIT);
  }

  if (term.multiplier === TermMultiplier.OPTIONAL) {
    return factory.createUnionTypeNode([
      type,
      factory.createLiteralTypeNode(factory.createStringLiteral("")),
    ]);
  }

  if (term.multiplier === TermMultiplier.REQUIRED) {
    // TODO: Implement this
    return type;
  }

  throw new Error(`Unhandled multiplier type ${term.multiplier}`);
};

const createComposed = (term: ComposedTerm): ts.TypeNode => {
  if (term.combinator === TermCombinator.JUXTAPOSITION) {
    const syntaxes = term.children.map(child => {
      const isOptional =
        (child as BracketsTerm).multiplier === TermMultiplier.OPTIONAL;
      if (isOptional) {
        (child as any).multiplier = undefined;
      }

      const type = createSyntax(child);
      if (!type) {
        throw new Error();
      }

      return [type, isOptional] as const;
    });

    return factory.createTemplateLiteralType(
      factory.createTemplateHead("", ""),
      syntaxes.map(([type, isOptional], idx) => {
        if (isOptional && idx > 0) {
          type = factory.createUnionTypeNode([
            factory.createLiteralTypeNode(factory.createStringLiteral("")),
            factory.createTemplateLiteralType(
              factory.createTemplateHead(" ", " "),
              [
                factory.createTemplateLiteralTypeSpan(
                  ts.TemplateCasing.None,
                  type,
                  factory.createTemplateTail("", "")
                ),
              ]
            ),
          ]);
        }

        const isNextOptional =
          idx < syntaxes.length - 1 && syntaxes[idx + 1][1];
        const separator = isNextOptional ? "" : " ";

        return factory.createTemplateLiteralTypeSpan(
          ts.TemplateCasing.None,
          type,
          idx < term.children.length - 1
            ? factory.createTemplateMiddle(separator, separator)
            : factory.createTemplateTail("", "")
        );
      })
    );
  }

  if (term.combinator === TermCombinator.SINGLE_BAR) {
    return factory.createUnionTypeNode(
      term.children
        .map(createSyntax)
        .filter((node): node is ts.TypeNode => !!node)
    );
  }

  // Not an accurate representation-this only allows for children to appear in
  // the order defined by the syntax (i.e. combinations, not permutations).
  // Considering all possibilities quickly results in OOM errors
  if (term.combinator === TermCombinator.DOUBLE_BAR) {
    return factory.createUnionTypeNode(
      getAllCombinations(term.children).map(selectedChildren => {
        if (selectedChildren.length === 1) {
          const type = createSyntax(selectedChildren[0]);
          if (!type) {
            throw new Error();
          }
          return type;
        }

        return factory.createTemplateLiteralType(
          factory.createTemplateHead("", ""),
          selectedChildren.map((child, idx) => {
            const type = createSyntax(child);
            if (!type) {
              throw new Error();
            }

            return factory.createTemplateLiteralTypeSpan(
              ts.TemplateCasing.None,
              type,
              idx < selectedChildren.length - 1
                ? factory.createTemplateMiddle(" ", " ")
                : factory.createTemplateTail("", "")
            );
          })
        );
      })
    );
  }

  // As above, values must appear in-order
  if (term.combinator === TermCombinator.DOUBLE_AMPERSAND) {
    return factory.createUnionTypeNode(
      _.combinations(term.children, term.children.length).map(children =>
        factory.createTemplateLiteralType(
          factory.createTemplateHead("", ""),
          children.map((child, idx) => {
            const type = createSyntax(child);
            if (!type) {
              throw new Error();
            }

            return factory.createTemplateLiteralTypeSpan(
              ts.TemplateCasing.None,
              type,
              idx < children.length - 1
                ? factory.createTemplateMiddle(" ", " ")
                : factory.createTemplateTail("", "")
            );
          })
        )
      )
    );
  }

  throw new Error(`Received unknown combinator: "${term.combinator}"`);
};

let debugStack: Term[] = [];

const createSyntax = (term: Term): null | ts.TypeNode => {
  if (term._value.startsWith("subgrid")) {
    // Experimental feature that opens a Pandora's Box of undocumented data types
    return null;
  }

  debugStack.push(term);

  if (term.type === TermType.BRACKETS) {
    return createBrackets(term as BracketsTerm);
  }

  if (term.type === TermType.COMPOSED) {
    return createComposed(term as ComposedTerm);
  }

  if (term.type === TermType.METHOD) {
    return createMethod(term as MethodTerm);
  }

  if (term.type === TermType.KEYWORD) {
    return factory.createLiteralTypeNode(
      factory.createStringLiteral(term._value)
    );
  }

  if (term.type === TermType.LITERAL) {
    return factory.createLiteralTypeNode(
      factory.createStringLiteral(term._value)
    );
  }

  if (term.type === TermType.DATA_TYPE) {
    return createDataType(term as DataTypeTerm);
  }

  throw new Error(
    `Unparseable syntax: "${term._value}". Stack:\n${debugStack.map(
      (t, i) => `${i}: ${t.print()}`
    )}`
  );
};

const createProperty = (name: string): ts.TypeNode => {
  const term = resolveSyntax(
    MDNProperties[name as keyof typeof MDNProperties].syntax
  );

  const syntax = createSyntax(term);

  if (!syntax) {
    throw new Error(`Got null node for property ${name}`);
  }

  return syntax;
};

Object.keys(MDNProperties).forEach(name => {
  if (
    [
      "--*",
      "default",

      // Too complex to represent :(
      "font-variant", // word offender, causes OOM
      "-webkit-mask",
      "mask",
      "background",
    ].includes(name)
  ) {
    return;
  }

  try {
    propertyNamespace.push(name, createProperty(name));
    debugStack = [];
  } catch (err) {
    console.error(`Failed creating property ${name}`);
    throw err;
  }
});

let tacky = printer.printList(
  ts.ListFormat.None,
  ts.createNodeArray(Namespace.all.map(namespace => namespace.node)),
  sourceFile
);

// in lieu of Prettier
tacky = tacky.split(";").join(";\n");

fs.writeFileSync("build/tacky.ts", tacky);
