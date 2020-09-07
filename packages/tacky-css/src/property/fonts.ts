import { singleArgProperty, PropertyTuple } from "../utils";

// TODO: User-extendable interface
export const fontFamily = (
  ...fontFamilies: [string, ...string[]]
): PropertyTuple<"fontFamily"> => [
  "fontFamily",
  fontFamilies
    .map(family => (family.includes(" ") ? `"${family}"` : family))
    .join(", "),
];

export const fontKerning = singleArgProperty("fontKerning");

export const fontOpticalSizing = singleArgProperty("fontOpticalSizing");

export const fontSize = singleArgProperty("fontSize");

export const fontSizeAdjust = singleArgProperty("fontSizeAdjust");

export const fontStretch = singleArgProperty("fontStretch");

export const fontVariantCaps = singleArgProperty("fontVariantCaps");

export const fontVariantPosition = singleArgProperty("fontVariantPosition");

export const lineHeight = singleArgProperty("lineHeight");

export const fontWeight = singleArgProperty("fontWeight");
