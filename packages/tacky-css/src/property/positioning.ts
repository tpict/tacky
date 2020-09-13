import * as CSS from "csstype";
import { TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple } from "../utils";

export const bottom = <T extends string>(
  bottom: CSS.Globals | CSSLengthPercentage<T> | "auto"
): PropertyTuple<"bottom"> =>
  ["bottom", bottom.toString() as TypedCSSProperties["bottom"]] as const;

export const clear = knownUnionProperty("clear");

export const float = knownUnionProperty("float");

export const left = <T extends string>(
  left: CSS.Globals | CSSLengthPercentage<T> | "auto"
): PropertyTuple<"left"> =>
  ["left", left.toString() as TypedCSSProperties["left"]] as const;

export const position = knownUnionProperty("position");

export const right = <T extends string>(
  right: CSS.Globals | CSSLengthPercentage<T> | "auto"
): PropertyTuple<"right"> =>
  ["right", right.toString() as TypedCSSProperties["right"]] as const;

export const top = <T extends string>(
  top: CSS.Globals | CSSLengthPercentage<T> | "auto"
): PropertyTuple<"top"> =>
  ["top", top.toString() as TypedCSSProperties["top"]] as const;

export const zIndex = knownUnionProperty("zIndex");
