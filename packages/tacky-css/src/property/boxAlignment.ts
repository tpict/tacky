import { KnownCSSValues } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const alignContent = knownUnionProperty("alignContent");

export const alignItems = knownUnionProperty("alignItems");

export const alignSelf = knownUnionProperty("alignSelf");

export const gridRowGap = variantProperty<
  "gridRowGap",
  KnownCSSValues<"rowGap"> | CSSLengthPercentage
>("gridRowGap");

export const justifyContent = knownUnionProperty("justifyContent");

export const justifyItems = knownUnionProperty("justifyItems");

export const justifySelf = knownUnionProperty("justifySelf");

export const rowGap = variantProperty<
  "rowGap",
  KnownCSSValues<"rowGap"> | CSSLengthPercentage
>("rowGap");
