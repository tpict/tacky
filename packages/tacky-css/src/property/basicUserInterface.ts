import { Property, Values } from "../generated/types";

export const cursor: Property.Cursor = (arg: unknown) =>
  ["cursor", arg as Values["cursor"]] as const;

export const outlineStyle: Property.OutlineStyle = (arg: unknown) =>
  ["outlineStyle", arg as Values["outlineStyle"]] as const;

export const textOverflow: Property.TextOverflow = (arg: unknown) =>
  ["textOverflow", arg as Values["textOverflow"]] as const;
