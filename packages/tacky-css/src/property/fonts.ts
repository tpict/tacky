import { TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple, variantProperty } from "../utils";

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

export const fontSize = variantProperty<"fontSize", CSSLengthPercentage>(
  "fontSize"
);

export const fontSizeAdjust = knownUnionProperty("fontSizeAdjust");

export const fontStretch = knownUnionProperty("fontStretch");

export const fontVariantCaps = knownUnionProperty("fontVariantCaps");

export const fontVariantPosition = knownUnionProperty("fontVariantPosition");

export const lineHeight = variantProperty<
  "lineHeight",
  CSSLengthPercentage | number
>("lineHeight");

export const fontWeight = knownUnionProperty("fontWeight");
