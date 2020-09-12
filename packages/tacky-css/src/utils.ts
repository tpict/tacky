import * as CSS from "csstype";
import { TypedCSSProperties } from "./types";
import { CSSLengthPercentage } from "./unit";

export type PropertyTuple<T extends keyof TypedCSSProperties> = readonly [
  T,
  TypedCSSProperties[T]
];

// A property which has a single value that can be represented by a union of
// known values.
export const knownUnionProperty = <T extends keyof TypedCSSProperties>(
  property: T
) => (value: TypedCSSProperties[T] | CSS.Globals): PropertyTuple<T> =>
  // TODO: Investigate TS2590 without this cast
  ([property, value] as unknown) as [T, TypedCSSProperties[T]];

// A property which has a single value that cannot be represented by a union of
// known values.
export const variantProperty = <
  T extends keyof TypedCSSProperties,
  U extends unknown
>(
  property: T
) => (value: U | CSS.Globals): [T, TypedCSSProperties[T]] =>
  // TODO: Investigate TS2590 without this cast
  ([property, value] as unknown) as [T, TypedCSSProperties[T]];

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
