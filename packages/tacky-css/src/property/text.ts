import * as CSS from "csstype";
import { TypedCSSProperties } from "../types";
import { CSSLength } from "../unit";
import { knownUnionProperty, PropertyTuple } from "../utils";

export const hyphens = knownUnionProperty("hyphens");

export const letterSpacing = <T extends string>(
  spacing: CSS.Globals | CSSLength<T> | "normal"
): PropertyTuple<"letterSpacing"> =>
  [
    "letterSpacing",
    spacing.toString() as TypedCSSProperties["letterSpacing"],
  ] as const;

export const lineBreak = knownUnionProperty("lineBreak");

export const overflowWrap = knownUnionProperty("overflowWrap");

export const tabSize = <T extends string>(
  size: CSS.Globals | CSSLength<T> | number
): PropertyTuple<"tabSize"> =>
  ["tabSize", size.toString() as TypedCSSProperties["tabSize"]] as const;

export const textAlign = knownUnionProperty("textAlign");

export const textAlignLast = knownUnionProperty("textAlignLast");

export const textJustify = knownUnionProperty("textJustify");

export const textTransform = knownUnionProperty("textTransform");

export const whiteSpace = knownUnionProperty("whiteSpace");

export const wordBreak = knownUnionProperty("wordBreak");

export const wordSpacing = <T extends string>(
  spacing: CSS.Globals | CSSLength<T> | "normal"
): PropertyTuple<"wordSpacing"> =>
  [
    "wordSpacing",
    spacing.toString() as TypedCSSProperties["wordSpacing"],
  ] as const;
