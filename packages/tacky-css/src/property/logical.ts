import { FitContent } from "../function";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { PropertyTuple } from "../utils";

export const blockSize = <T extends string>(
  size: KnownCSSValues<"blockSize"> | CSSLengthPercentage<T> | FitContent
): PropertyTuple<"blockSize"> =>
  ["blockSize", size.toString() as TypedCSSProperties["blockSize"]] as const;

export const inlineSize = <T extends string>(
  size: KnownCSSValues<"inlineSize"> | CSSLengthPercentage<T> | FitContent
): PropertyTuple<"inlineSize"> =>
  ["inlineSize", size.toString() as TypedCSSProperties["inlineSize"]] as const;
