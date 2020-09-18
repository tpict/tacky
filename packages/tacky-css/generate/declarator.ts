import { getDataTypesOf } from "./collections/data-types";
import {
  getGlobals,
  getHtmlProperties,
  getSvgProperties,
  isVendorProperty,
} from "./collections/properties";
import { IDataType, Type, TypeType } from "./syntax/typer";
import { toCamelCase, toPascalCase, toVendorPrefixCase } from "./utils/casing";

export interface ArgType {
  name: string;
  types: DeclarableType[];
}

export interface IFunction {
  args: ArgType[];
  return: string;
}

export interface IArray {
  type: Type.Array;
  of: DeclarableType;
}

export interface IAlias {
  type: Type.Alias;
  name: string;
  generics: IGenerics[];
  namespace: INamespace | undefined;
}

export interface IGenerics {
  name: string;
  defaults?: SimpleType[];
  extend?: string;
}

export type Interface = IInterfaceProperties;

export interface IInterfaceProperties {
  name: string;
  generics: IGenerics[];
  extends: Interface[];
  export: boolean;
  properties: PropertyType[];
  comment: () => Promise<string | undefined>;
}

export function isInterface(
  value: Interface | IDeclaration | EmptyEnum
): value is Interface {
  return !!(value as IInterfaceProperties).properties;
}

export function isEmptyEnum(
  value: Interface | IDeclaration | EmptyEnum
): value is EmptyEnum {
  return (value as EmptyEnum).type === "enum";
}

export function isInterfaceProperties(
  value: Interface
): value is IInterfaceProperties {
  return !!(value as IInterfaceProperties).properties;
}

export function isInterfaceFunction(value: PropertyType): value is IFunction {
  return !!(value as IFunction).args;
}

interface IPropertyAlias {
  name: string;
  generics: IGenerics[];
  alias: IAlias;
  comment: () => Promise<string | undefined>;
  namespace: INamespace | undefined;
}

export interface IPropertyType {
  name: string;
  type: DeclarableType;
  comment: () => Promise<string | undefined>;
}

export type PropertyType = IPropertyAlias | IPropertyType | IFunction;

type MixedType = TypeType<IDataType<Type.DataType> | IAlias> | IArray;
export type DeclarableType = TypeType<IAlias> | IArray;
export type SimpleType = Exclude<DeclarableType, IAlias>;

export interface INamespace {
  name: string;
  export: boolean;
  body: () => (Interface | IDeclaration | EmptyEnum)[];
}

export interface IDeclaration {
  name: string;
  export: boolean;
  types: DeclarableType[];
  generics: IGenerics[];
  namespace: INamespace | undefined;
  comment?: () => Promise<string | undefined>;
}

export interface EmptyEnum {
  type: "enum";
  name: string;
}

export const lengthGeneric: IGenerics = {
  name: "TLength",
  defaults: [{ type: Type.String }, { type: Type.NumericLiteral, literal: 0 }],
};

export const timeGeneric: IGenerics = {
  name: "TTime",
  defaults: [{ type: Type.String }],
};

export async function declarator(minTypesInDataTypes: number) {
  const [
    dataTypes,
    [htmlProperties, svgProperties, globals],
  ] = await getDataTypesOf(dictionary =>
    Promise.all([
      getHtmlProperties(dictionary, minTypesInDataTypes),
      getSvgProperties(dictionary, minTypesInDataTypes),
      getGlobals(dictionary, minTypesInDataTypes),
    ])
  );

  function getGenericsFrom(types: MixedType[]): IGenerics[] {
    let hasLength = false;
    let hasTime = false;

    const hasGeneric = (type: MixedType) => {
      switch (type.type) {
        case Type.Length:
          hasLength = true;
          break;
        case Type.Time:
          hasTime = true;
          break;
        case Type.DataType:
          if (type.name in dataTypes) {
            dataTypes[type.name].forEach(hasGeneric);
          } else {
            console.error("DATATYPE MISSING: ", type.name);
          }
          break;
      }
    };

    types.forEach(hasGeneric);

    const generics: IGenerics[] = [];

    // if (hasLength) {
    //   generics.push(lengthGeneric);
    // }

    // if (hasTime) {
    //   generics.push(timeGeneric);
    // }

    return generics;
  }

  function alias(
    name: string,
    generics: IGenerics[] = [],
    namespace?: INamespace
  ): IAlias {
    return {
      type: Type.Alias,
      name,
      generics,
      namespace,
    };
  }

  function aliasOf({ name, generics, namespace }: IDeclaration): IAlias {
    return alias(name, generics, namespace);
  }

  function declarable(types: MixedType[]): DeclarableType[] {
    const dataTypeToAlias = (type: IDataType<Type.DataType>) =>
      type.name in dataTypes
        ? alias(
            toPascalCase(type.name),
            getGenericsFrom(dataTypes[type.name]),
            dataTypeNamespace
          )
        : alias(toPascalCase(type.name));

    return types.sort(sorter).map<DeclarableType>(type => {
      if (type.type === Type.DataType) {
        return dataTypeToAlias(type);
      }

      return type;
    });
  }

  const globalDeclarations: Map<MixedType[], IDeclaration> = new Map();

  function declarationNameExists(
    map: Map<MixedType[], Interface>,
    name: string
  ): boolean {
    for (const declaration of map.values()) {
      if (declaration.name === name) {
        return true;
      }
    }

    return false;
  }

  const globalsDeclaration: IDeclaration = {
    name: "Globals",
    export: true,
    types: declarable(globals),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(globals, globalsDeclaration);

  const propertyDeclarations: Map<MixedType[], Interface> = new Map();
  const valueEnumDeclarations: EmptyEnum[] = [];
  const dataTypeDeclarations: Map<MixedType[], IDeclaration> = new Map();
  const manualDataTypeDeclarations = new Map<
    string,
    [Interface, IDeclaration]
  >();

  const propertyNamespace: INamespace = {
    name: "Property",
    export: true,
    body: () => Array.from(propertyDeclarations.values()),
  };
  const valueEnumNamespace: INamespace = {
    name: "ValueEnum",
    export: false,
    body: () => valueEnumDeclarations,
  };
  const dataTypeNamespace: INamespace = {
    name: "DataType",
    export: false,
    body: () => Array.from(dataTypeDeclarations.values()),
  };
  const manualDataTypeNamespace: INamespace = {
    name: "ManualDataType",
    export: true,
    body: () => Array.from(manualDataTypeDeclarations.values()).flat(),
  };

  const valueInterface: Interface = {
    name: "Values",
    export: true,
    generics: [],
    extends: [],
    comment: async () => undefined,
    properties: [],
  };

  const extra: string[] = [];

  for (const properties of [htmlProperties, svgProperties]) {
    // Sort alphabetical, starting with standard properties
    const propertyNames = ([] as string[]).concat(
      Object.keys(properties)
        .filter(name => name[0] !== "-")
        .sort(),
      Object.keys(properties)
        .filter(name => name[0] === "-")
        .sort()
    );

    for (const name of propertyNames) {
      const property = properties[name];

      if (property.obsolete) {
        // Obsolete properties are unsupported
        continue;
      }

      if (property.name === "default") {
        // what is this and where does it come from?
        continue;
      }

      const generics = getGenericsFrom(property.types);

      const validTypes = property.types.filter(
        ({ type }) => ![Type.String].includes(type)
      );

      // Some properties are prefixed and share the same type so we
      // make sure to reuse the same declaration of that type
      let declaration = propertyDeclarations.get(validTypes);

      if (!declaration) {
        const realName = property.vendor
          ? toVendorPrefixCase(name)
          : toCamelCase(name);
        const declarationName = toPascalCase(name);

        const returnType = `PropertyTuple<"${realName}">`;

        const properties = [];

        if (validTypes.length > 0) {
          properties.push({
            args: [{ name: "global", types: [aliasOf(globalsDeclaration)] }],
            return: returnType,
          });

          properties.push({
            args: [{ name: "value", types: declarable(validTypes) }],
            return: returnType,
          });
        }

        declaration = {
          name: declarationName,
          export: true,
          // types: declarable(property.types),
          // types: [aliasOf(globalsDeclaration), ...declarable(property.types)],
          generics,
          // namespace: propertyNamespace,
          comment: property.comment,
          extends: [],
          properties,
        };

        // Some SVG properties are shared with regular style properties
        // and we assume here that they are identical
        if (!declarationNameExists(propertyDeclarations, declarationName)) {
          propertyDeclarations.set(validTypes, declaration);

          valueEnumDeclarations.push({
            type: "enum",
            name: declarationName,
          });

          if (validTypes.length === property.types.length) {
            extra.push(
              `export const ${realName}: Property.${declarationName} = (arg: unknown) =>
                ["${realName}", arg as Values["${realName}"]] as const;`
            );
          }

          valueInterface.properties.push({
            name: realName,
            comment: async () => undefined,
            generics: [],
            namespace: undefined,
            alias: aliasOf({
              export: false,
              types: [],
              generics: [],
              name: declarationName,
              namespace: valueEnumNamespace,
            }),
          });
        }
      }
    }
  }

  // Loop in alphabetical order
  for (const name of Object.keys(dataTypes).sort()) {
    const declarableDataType = declarable(dataTypes[name]);

    for (const [index, type] of declarableDataType.entries()) {
      if (type.type === Type.String) {
        let group = manualDataTypeDeclarations.get("name");
        if (!group) {
          const newInterface = {
            name: "I" + toPascalCase(name),
            export: true,
            properties: [],
            generics: [],
            extends: [],
            comment: async () => undefined,
          };

          const alias: IAlias = {
            type: Type.Alias,
            name: "keyof I" + toPascalCase(name),
            generics: [],
            namespace: manualDataTypeNamespace,
          };

          const newType = {
            name: toPascalCase(name),
            export: true,
            generics: [],
            namespace: manualDataTypeNamespace,
            types: [alias],
          };

          group = [newInterface, newType];

          manualDataTypeDeclarations.set(name, group);
        }

        declarableDataType[index] = {
          type: Type.Alias,
          name: group[1].name,
          generics: [],
          namespace: manualDataTypeNamespace,
        };
      }
    }

    dataTypeDeclarations.set(declarableDataType, {
      name: toPascalCase(name),
      export: false,
      types: declarableDataType,
      generics: getGenericsFrom(dataTypes[name]),
      namespace: dataTypeNamespace,
    });
  }

  const namespaces: INamespace[] = [
    propertyNamespace,
    manualDataTypeNamespace,
    dataTypeNamespace,
    valueEnumNamespace,
  ];

  return {
    declarations: Array.from(globalDeclarations.values()),
    interfaces: [valueInterface],
    namespaces,
    extra,
  };
}

export function isAliasProperty(value: PropertyType): value is IPropertyAlias {
  return "alias" in value;
}

function sorter(a: MixedType, b: MixedType) {
  if (a.type === Type.StringLiteral && b.type === Type.StringLiteral) {
    return a.literal < b.literal ? -1 : a.literal > b.literal ? 1 : 0;
  }
  if (a.type === Type.Function && b.type === Type.Function) {
    return a.literal < b.literal ? -1 : a.literal > b.literal ? 1 : 0;
  }
  if (a.type === Type.NumericLiteral && b.type === Type.NumericLiteral) {
    return a.literal - b.literal;
  }
  return a.type - b.type;
}

function onlyContainsString(types: MixedType[]): boolean {
  return types.length === 1 && types[0].type === Type.String;
}

function onlyContainsNumber(types: MixedType[]): boolean {
  return types.length === 1 && types[0].type === Type.Number;
}
