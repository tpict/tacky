import * as CSS from "csstype";
import { KnownCSSValues } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const hyphens = knownUnionProperty("hyphens");

export const letterSpacing = variantProperty<
  "letterSpacing",
  KnownCSSValues<"letterSpacing">
>("letterSpacing");

export const lineBreak = knownUnionProperty("lineBreak");

export const overflowWrap = knownUnionProperty("overflowWrap");

export const tabSize = variantProperty<
  "tabSize",
  CSS.Properties<never>["tabSize"] | CSSLengthPercentage
>("tabSize");

export const textAlign = knownUnionProperty("textAlign");

export const textAlignLast = knownUnionProperty("textAlignLast");

export const textJustify = knownUnionProperty("textJustify");

export const textTransform = knownUnionProperty("textTransform");

export const whiteSpace = knownUnionProperty("whiteSpace");

export const wordBreak = knownUnionProperty("wordBreak");

export const wordSpacing = variantProperty<
  "wordSpacing",
  KnownCSSValues<"wordSpacing"> | CSSLengthPercentage
>("wordSpacing");
