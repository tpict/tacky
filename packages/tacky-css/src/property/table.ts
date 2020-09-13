import { TypedCSSProperties, KnownCSSValues } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple } from "../utils";

export const borderCollapse = knownUnionProperty("borderCollapse");

export const captionSide = knownUnionProperty("captionSide");

export const emptyCells = knownUnionProperty("emptyCells");

export const tableLayout = knownUnionProperty("tableLayout");

export const verticalAlign = <T extends string>(
  alignment: KnownCSSValues<"verticalAlign"> | CSSLengthPercentage<T>
): PropertyTuple<"verticalAlign"> =>
  [
    "verticalAlign",
    alignment.toString() as TypedCSSProperties["verticalAlign"],
  ] as const;
