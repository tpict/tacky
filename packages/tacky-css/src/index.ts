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

class Namespace {
  private readonly name: string;
  private readonly nodes: ts.Statement[];
  private readonly mapping: Record<string, ts.TypeReferenceNode>;
  static readonly all: Namespace[] = [];

  constructor(name: string) {
    this.name = name;
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
      [ts.createModifier(ts.SyntaxKind.DeclareKeyword)],
      factory.createIdentifier(this.name),
      factory.createModuleBlock(this.nodes)
    );
  }
}

const dataTypeNamespace = new Namespace("DataType");
const methodNamespace = new Namespace("Method");
const propertyNamespace = new Namespace("Property");

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

// TODO actually check integers
dataTypeNamespace.push(
  "integer",
  factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
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
  "number [1,1000]",
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

let debugStack: Term[] = [];

type ReferenceNode =
  | ts.LiteralTypeNode
  | ts.TypeReferenceNode
  | ts.UnionTypeNode
  | ts.KeywordTypeNode<ts.KeywordTypeSyntaxKind>;

const createSyntax = (term: Term): null | ts.TypeNode => {
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
  if (["--*", "default"].includes(name)) {
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

const nodes = Namespace.all.map(namespace => namespace.node);

let tacky = printer.printList(
  ts.ListFormat.None,
  factory.createNodeArray(nodes),
  sourceFile
);

// in lieu of Prettier
tacky = tacky.split(";").join(";\n");

fs.writeFileSync("tacky.ts", tacky);
