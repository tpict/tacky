import {
  DeclarableType,
  IDeclaration,
  INamespace,
  Interface,
  isAliasProperty,
  isEmptyEnum,
  isInterface,
  isInterfaceFunction,
  isInterfaceProperties,
  SimpleType,
} from "./declarator";
import { Type } from "./syntax/typer";
import {
  createStringifyType,
  EOL,
  generatingDeclarations,
  stringifyGenerics,
} from "./utils/output";

export default async function typescript(): Promise<string> {
  const {
    namespaces,
    interfaces,
    declarations,
    extra,
  } = await generatingDeclarations;

  let interfacesOutput = "";
  for (const entry of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL;
    }

    interfacesOutput += (await outputInterface(entry, undefined)) + EOL;
  }

  let declarationsOutput = "";
  for (const entry of declarations) {
    if (declarationsOutput) {
      declarationsOutput += EOL;
    }

    declarationsOutput += (await outputDeclaration(entry, undefined)) + EOL;
  }

  let namespaceOutput = "";
  for (const namespace of namespaces) {
    if (namespaceOutput) {
      namespaceOutput += EOL;
    }

    if (namespace.export) {
      namespaceOutput += "export ";
    } else {
      namespaceOutput += "declare ";
    }

    namespaceOutput += `namespace ${namespace.name} {${EOL}`;

    const body = namespace.body();

    for (const entry of body) {
      if (namespaceOutput) {
        namespaceOutput += EOL;
      }

      if (isInterface(entry)) {
        namespaceOutput += (await outputInterface(entry, namespace)) + EOL;
      } else if (isEmptyEnum(entry)) {
        namespaceOutput += `export enum ${entry.name} { _ = "" }` + EOL;
      } else {
        namespaceOutput += (await outputDeclaration(entry, namespace)) + EOL;
      }
    }

    namespaceOutput += `}${EOL}`;
  }

  const disableAutoExport = "export {};" + EOL;
  const propertyTuple =
    "export type PropertyTuple<T extends keyof Values> = readonly [T, Values[T]]" + EOL;

  return (
    disableAutoExport +
    EOL +
    propertyTuple +
    EOL +
    interfacesOutput +
    EOL +
    declarationsOutput +
    EOL +
    namespaceOutput +
    EOL +
    extra.join("\n\n")
  );
}

async function outputInterface(
  entry: Interface,
  currentNamespace: INamespace | undefined
): Promise<string> {
  let output = "";

  const comment = await entry.comment?.();
  if (comment) {
    output += comment + EOL;
  }

  if (entry.export) {
    output += "export ";
  }

  if (isInterfaceProperties(entry)) {
    const extendList = entry.extends
      .map(extend => extend.name + stringifyGenerics(extend.generics))
      .join(", ");
    output +=
      "interface " +
      entry.name +
      stringifyGenerics(entry.generics, true, stringifySimpleTypes);

    if (extendList) {
      output += ` extends ${extendList}`;
    }

    output += "{" + EOL;

    for (const property of entry.properties) {
      if (isInterfaceFunction(property)) {
        output += "(";
        const args = property.args
          .map(
            arg => `${arg.name}: ${stringifyTypes(arg.types, currentNamespace)}`
          )
          .join(", ");

        output += args;
        output += `): ${property.return};`;
        output += EOL;
      } else {
        const comment = await property.comment();
        if (comment) {
          output += comment + EOL;
        }

        const type = isAliasProperty(property) ? property.alias : property.type;
        const value = stringifyTypes([type], currentNamespace);

        // appalling
        const withString =
          isAliasProperty(property) &&
          property.alias.namespace?.name === "ValueEnum"
            ? " & string"
            : "";

        output += `${JSON.stringify(property.name)}: ${value}${withString};`;

        output += EOL;
      }
    }
    output += "}";
  }

  return output;
}

async function outputDeclaration(
  entry: IDeclaration,
  currentNamespace: INamespace | undefined
): Promise<string> {
  let output = "";

  const comment = await entry.comment?.();
  if (comment) {
    output += comment + EOL;
  }

  if (entry.export) {
    output += "export ";
  }

  output += `type ${
    entry.name +
    stringifyGenerics(entry.generics, entry.export, stringifySimpleTypes)
  } = ${stringifyTypes(entry.types, currentNamespace)}`;

  return output;
}

function stringifyTypes(
  types: DeclarableType[],
  currentNamespace: INamespace | undefined
): string {
  const stringifyType = createStringifyType(type => {
    // The type is in its own namespace so keep it empty
    const namespace =
      type.namespace && type.namespace !== currentNamespace
        ? `${type.namespace.name}.`
        : "";
    return namespace + type.name;
  }, currentNamespace);

  return types
    // .filter(({ type }) => ![Type.String, Type.Length, Type.Time].includes(type))
    .map(type => stringifyType(type))
    .join(" | ");
}

function stringifySimpleTypes(types: SimpleType[]): string {
  return stringifyTypes(types, undefined);
}
