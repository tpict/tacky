import { Property, Values } from "../generated/types";

declare module "../generated/types" {
  namespace Property {
    // TODO: User-extendable interface
    export interface FontFamily {
      (...fontFamilies: [string, ...string[]]): PropertyTuple<"fontFamily">;
    }
  }
}

export const fontFamily: Property.FontFamily = (...args: unknown[]) =>
  [
    "fontFamily",
    (args as string[])
      .map(family => (family.includes(" ") ? `"${family}"` : family))
      .join(", ") as Values["fontFamily"],
  ] as const;
