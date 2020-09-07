import * as CSS from "csstype";
import { TypedCSSProperties } from "./types";
import { CSSLengthPercentage } from "./unit";

export type PropertyTuple<T extends keyof TypedCSSProperties> = readonly [
  T,
  TypedCSSProperties[T]
];

export const singleArgProperty = <T extends keyof TypedCSSProperties>(
  property: T
) => (value: TypedCSSProperties[T]): PropertyTuple<T> => [property, value];

export interface FourDimensionalProperty<ReturnType, ValueType> {
  (global: CSS.Globals): ReturnType;
  (all: ValueType): ReturnType;
  (vertical: ValueType, horizontal: ValueType): ReturnType;
  (top: ValueType, right: ValueType, bottom: ValueType): ReturnType;
  (
    top: ValueType,
    right: ValueType,
    bottom: ValueType,
    left: ValueType
  ): ReturnType;
}

export type FourDimensionalArgs<Value = CSSLengthPercentage> =
  | [all: Value]
  | [vertical: Value, horizontal: Value]
  | [top: Value, right: Value, bottom: Value]
  | [top: Value, right: Value, bottom: Value, left: Value];

export type FourDimensionalValue = string & {
  _tacky_id_four_d: never;
};
