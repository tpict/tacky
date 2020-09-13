import * as CSS from "csstype";
import { TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple } from "../utils";

// TODO: User-extendable interface
export const fontFamily = (
  ...fontFamilies: [string, ...string[]]
): PropertyTuple<"fontFamily"> => [
  "fontFamily",
  fontFamilies
    .map(family => (family.includes(" ") ? `"${family}"` : family))
    .join(", ") as TypedCSSProperties["fontFamily"],
];

export const fontKerning = knownUnionProperty("fontKerning");

export const fontOpticalSizing = knownUnionProperty("fontOpticalSizing");

export const fontSize = <T extends string>(
  fontSize: CSS.Globals | CSSLengthPercentage<T>
): PropertyTuple<"fontSize"> =>
  ["fontSize", fontSize.toString() as TypedCSSProperties["fontSize"]] as const;

export const fontSizeAdjust = knownUnionProperty("fontSizeAdjust");

export const fontStretch = knownUnionProperty("fontStretch");

export const fontVariantCaps = knownUnionProperty("fontVariantCaps");

export const fontVariantPosition = knownUnionProperty("fontVariantPosition");

export const lineHeight = <T extends string>(
  lineHeight: CSSLengthPercentage<T> | number
): PropertyTuple<"lineHeight"> =>
  [
    "lineHeight",
    lineHeight.toString() as TypedCSSProperties["lineHeight"],
  ] as const;

export const fontWeight = knownUnionProperty("fontWeight");
