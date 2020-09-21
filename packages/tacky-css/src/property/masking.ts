import * as CSS from "csstype";
import { CSSURL } from "../function";
import { CSSShape } from "../shape";
import { TypedCSSProperties } from "../types";
import { knownUnionProperty, PropertyTuple } from "../utils";

// TODO: MDN defines a <geometry-box> value which only seems to work in Firefox
export interface ClipPath {
  (global: CSS.Globals): PropertyTuple<"clipPath">;
  (clipSource: CSSURL): PropertyTuple<"clipPath">;
  (basicShape: CSSShape): PropertyTuple<"clipPath">;
}

export const clipPath: ClipPath = (value: unknown) =>
  ["clipPath", value as TypedCSSProperties["clipPath"]] as const;

export const maskType = knownUnionProperty("maskType");
