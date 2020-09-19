import { CSSURL } from "../function";
import { Values, Property } from "../generated/types";
import { CSSShape } from "../shape";

// TODO: MDN defines a <geometry-box> value which only seems to work in Firefox
declare module "../generated/types" {
  namespace Property {
    export interface ClipPath {
      (clipSource: CSSURL): PropertyTuple<"clipPath">;
      (basicShape: CSSShape): PropertyTuple<"clipPath">;
    }
  }
}

export const clipPath: Property.ClipPath = (value: unknown) =>
  ["clipPath", value as Values["clipPath"]] as const;
