import { Values, Property } from "../generated/types";
// TODO: these all have additional syntaxes

export const alignContent: Property.AlignContent = (arg: unknown) =>
  ["alignContent", arg as Values["alignContent"]] as const;

export const alignItems: Property.AlignItems = (arg: unknown) =>
  ["alignItems", arg as Values["alignItems"]] as const;

export const alignSelf: Property.AlignSelf = (arg: unknown) =>
  ["alignSelf", arg as Values["alignSelf"]] as const;

export const justifyContent: Property.JustifyContent = (arg: unknown) =>
  ["justifyContent", arg as Values["justifyContent"]] as const;

export const justifyItems: Property.JustifyItems = (arg: unknown) =>
  ["justifyItems", arg as Values["justifyItems"]] as const;

export const justifySelf: Property.JustifySelf = (arg: unknown) =>
  ["justifySelf", arg as Values["justifySelf"]] as const;
