import { KnownCSSValues } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const borderCollapse = knownUnionProperty("borderCollapse");

export const captionSide = knownUnionProperty("captionSide");

export const emptyCells = knownUnionProperty("emptyCells");

export const tableLayout = knownUnionProperty("tableLayout");

export const verticalAlign = variantProperty<
  "verticalAlign",
  KnownCSSValues<"verticalAlign"> | CSSLengthPercentage
>("verticalAlign");
