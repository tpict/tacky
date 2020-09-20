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
} from "css-syntax-parser";
import ts, { factory } from "typescript";
import _ from "lodash";

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

declare module "lodash" {
  export interface LoDashStatic {
    pascalCase(string?: string): string;
  }
}

const sourceFile = ts.createSourceFile(
  "tacky.ts",
  "",
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

const nodes: ts.Node[] = [];

const lengthUnits = ["px", "rem"];
const timeUnits = ["s", "ms"];
const angleUnits = ["deg", "rad"];
const resolutionUnits = ["dpi", "dpcm"];

const createUnit = (name: string, symbol: string): ts.TypeAliasDeclaration =>
  factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(name),
    undefined,
    factory.createTemplateLiteralType(factory.createTemplateHead("", ""), [
      factory.createTemplateLiteralTypeSpan(
        ts.TemplateCasing.None,
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        factory.createTemplateTail(symbol, symbol)
      ),
    ])
  );

[lengthUnits, timeUnits, angleUnits].flat().forEach(unit => {
  nodes.push(createUnit(_.upperFirst(unit), unit));
});

[
  ["Length", lengthUnits] as const,
  ["Time", timeUnits] as const,
  ["Angle", angleUnits] as const,
  ["Resolution", resolutionUnits] as const,
].forEach(([typeName, units]) => {
  nodes.push(
    factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      factory.createIdentifier(typeName),
      undefined,
      factory.createUnionTypeNode(
        units.map(unit =>
          factory.createTypeReferenceNode(
            factory.createIdentifier(_.upperFirst(unit)),
            undefined
          )
        )
      )
    )
  );
});

nodes.push(createUnit("Percentage", "%"));

const dataTypes: Record<
  string,
  | ts.TypeReferenceNode
  | ts.UnionTypeNode
  | ts.KeywordTypeNode<ts.KeywordTypeSyntaxKind>
> = {
  angle: factory.createTypeReferenceNode(factory.createIdentifier("Angle")),
  length: factory.createTypeReferenceNode(factory.createIdentifier("Length")),
  percentage: factory.createTypeReferenceNode(
    factory.createIdentifier("Length")
  ),
  time: factory.createTypeReferenceNode(factory.createIdentifier("Time")),
  resolution: factory.createTypeReferenceNode(
    factory.createIdentifier("Resolution")
  ),
  number: factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  string: factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),

  // TODO: the MDN syntax is invalid
  "line-names": factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),

  // TODO actually check integers
  integer: factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),

  // TODO
  "custom-ident": factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  "hex-color": factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  url: factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  ratio: factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  x: factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  y: factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
  "number [1,1000]": factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
};

dataTypes["length-percentage"] = factory.createUnionTypeNode([
  dataTypes["length"],
  dataTypes["percentage"],
]);

const methods: Record<string, ts.TypeReferenceNode> = {};

const createMethod = (term: MethodTerm): ts.TypeReferenceNode => {
  if (methods[term.name]) {
    return methods[term.name];
  }

  nodes.push(
    factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      factory.createIdentifier(_.pascalCase(term.name)),
      undefined,
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
    )
  );

  methods[term.name] = factory.createTypeReferenceNode(
    factory.createIdentifier(_.pascalCase(term.name)),
    undefined
  );

  return methods[term.name];
};

const createDataType = (
  term: DataTypeTerm
):
  | ts.TypeReferenceNode
  | ts.UnionTypeNode
  | ts.KeywordTypeNode<ts.KeywordTypeSyntaxKind> => {
  if (dataTypes[term.name]) {
    return dataTypes[term.name];
  }

  let syntax = MDNSyntaxes[term.name as keyof typeof MDNSyntaxes]?.syntax;

  if (!syntax) {
    syntax = MDNProperties[term.name as keyof typeof MDNProperties]?.syntax;
  }

  if (!syntax) {
    throw new Error(`Unknown syntax "${term.name}"`);
  }

  const parsedSyntax = createSyntax(resolveSyntax(syntax));

  if (!parsedSyntax) {
    throw new Error(`Got null node for data-type ${term.name}`);
  }

  nodes.push(
    factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      factory.createIdentifier(_.pascalCase(term.name)),
      undefined,
      parsedSyntax
    )
  );

  dataTypes[term.name] = factory.createTypeReferenceNode(
    factory.createIdentifier(_.pascalCase(term.name)),
    undefined
  );

  return dataTypes[term.name];
};

let debugStack: Term[] = [];

type ReferenceNode =
  | ts.LiteralTypeNode
  | ts.TypeReferenceNode
  | ts.UnionTypeNode
  | ts.KeywordTypeNode<ts.KeywordTypeSyntaxKind>;

const createSyntax = (term: Term): null | ReferenceNode => {
  if (term._value.startsWith("subgrid")) {
    // Experimental feature that opens a Pandora's Box of undocumented data types
    return null;
  }

  debugStack.push(term);

  if (term.type === TermType.BRACKETS) {
    return createSyntax((term as BracketsTerm).content);
  }

  if (term.type === TermType.COMPOSED) {
    return factory.createUnionTypeNode(
      (term as ComposedTerm).children
        .map(createSyntax)
        .filter((node): node is ReferenceNode => !!node)
    );
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

const createProperty = (name: string): ts.Node => {
  const term = resolveSyntax(
    MDNProperties[name as keyof typeof MDNProperties].syntax
  );

  const syntax = createSyntax(term);

  if (!syntax) {
    throw new Error(`Got null node for property ${name}`);
  }

  return factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(_.camelCase(name)),
    undefined,
    syntax
  );
};

Object.keys(MDNProperties).forEach(name => {
  if (["--*", "default"].includes(name)) {
    return;
  }

  try {
    nodes.push(createProperty(name));
    debugStack = [];
  } catch (err) {
    console.error(`Failed creating property ${name}`);
    throw err;
  }
});

let tacky = printer.printList(
  ts.ListFormat.None,
  factory.createNodeArray(nodes),
  sourceFile
);

// in lieu of Prettier
tacky = tacky.split(";").join(";\n");

fs.writeFileSync("tacky.ts", tacky);
