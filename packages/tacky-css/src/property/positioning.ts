import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const bottom = variantProperty<"bottom", CSSLengthPercentage | "auto">(
  "bottom"
);

export const clear = knownUnionProperty("clear");

export const float = knownUnionProperty("float");

export const left = variantProperty<"left", CSSLengthPercentage | "auto">(
  "left"
);

export const position = knownUnionProperty("position");

export const right = variantProperty<"right", CSSLengthPercentage | "auto">(
  "right"
);

export const top = variantProperty<"top", CSSLengthPercentage | "auto">("top");

export const zIndex = knownUnionProperty("zIndex");
