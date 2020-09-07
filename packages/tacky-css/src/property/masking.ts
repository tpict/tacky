import * as CSS from "csstype";
import { CSSURL } from "../function";
import { CSSShape } from "../shape";
import { singleArgProperty, PropertyTuple } from "../utils";

// TODO: MDN defines a <geometry-box> value which only seems to work in Firefox
export type ClipPathValue = string & { _tacky_id_clip_path: never };

export interface ClipPath {
  (global: CSS.Globals): PropertyTuple<"clipPath">;
  (clipSource: CSSURL): PropertyTuple<"clipPath">;
  (basicShape: CSSShape): PropertyTuple<"clipPath">;
}

export const clipPath: ClipPath = (value: unknown) =>
  ["clipPath", value as ClipPathValue] as const;

export const maskType = singleArgProperty("maskType");
