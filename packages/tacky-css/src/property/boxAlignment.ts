import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple } from "../utils";

export const alignContent = knownUnionProperty("alignContent");

export const alignItems = knownUnionProperty("alignItems");

export const alignSelf = knownUnionProperty("alignSelf");

export const gridRowGap = <T extends string>(
  gridRowGap: KnownCSSValues<"gridRowGap"> | CSSLengthPercentage<T>
): PropertyTuple<"gridRowGap"> =>
  [
    "gridRowGap",
    gridRowGap.toString() as TypedCSSProperties["gridRowGap"],
  ] as const;

export const justifyContent = knownUnionProperty("justifyContent");

export const justifyItems = knownUnionProperty("justifyItems");

export const justifySelf = knownUnionProperty("justifySelf");

export const rowGap = <T extends string>(
  rowGap: KnownCSSValues<"rowGap"> | CSSLengthPercentage<T>
): PropertyTuple<"rowGap"> =>
  ["rowGap", rowGap.toString() as TypedCSSProperties["rowGap"]] as const;
