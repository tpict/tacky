import { FitContent } from "../function";
import { KnownCSSValues } from "../types";
import { CSSLengthPercentage } from "../unit";
import { variantProperty } from "../utils";

export const blockSize = variantProperty<
  "blockSize",
  KnownCSSValues<"blockSize"> | CSSLengthPercentage | FitContent
>("blockSize");

export const inlineSize = variantProperty<
  "inlineSize",
  KnownCSSValues<"inlineSize"> | CSSLengthPercentage | FitContent
>("inlineSize");
