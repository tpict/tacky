import { TypedCSSProperties } from "./types";
import { CSSLengthPercentage } from "./unit";

export type PropertyTuple<T extends keyof TypedCSSProperties> = readonly [
  T,
  TypedCSSProperties[T]
];

export const singleArgProperty = <T extends keyof TypedCSSProperties>(
  property: T
) => (value: TypedCSSProperties[T]): PropertyTuple<T> => [property, value];

export type FourDimensionalArgs =
  | [all: CSSLengthPercentage]
  | [vertical: CSSLengthPercentage, horizontal: CSSLengthPercentage]
  | [
      top: CSSLengthPercentage,
      right: CSSLengthPercentage,
      bottom: CSSLengthPercentage
    ]
  | [
      top: CSSLengthPercentage,
      right: CSSLengthPercentage,
      bottom: CSSLengthPercentage,
      left: CSSLengthPercentage
    ];

export type FourDimensionalValue = string & {
  _tacky_id_four_d: never;
};
