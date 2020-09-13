import * as CSS from "csstype";
import { TypedCSSProperties } from "./types";

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

export type FourDimensionalArgs<Value> =
  | [all: Value]
  | [vertical: Value, horizontal: Value]
  | [top: Value, right: Value, bottom: Value]
  | [top: Value, right: Value, bottom: Value, left: Value];

type Digits = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";


type MatchInteger<S extends string, Units extends string, T = S> = S extends Units
? T
: S extends `${infer U}${infer W}`
? U extends Digits ? W extends "" ? never : MatchInteger<W, Units, T>
: never
: never;


type MatchPositiveDecimal<S extends string, Units extends string, T = S> = S extends `${infer U}.${infer V}`
? V extends Units ? never
: MatchInteger<`${U}${V}`, Units, T>  : MatchInteger<S, Units, T>;

export type MatchDecimal<S extends string, Units extends string> = S extends ({[P in S]: P extends Units
? never
: P extends `${"-" | ""}${infer U}`
? MatchPositiveDecimal<U, Units, P> : never
}[S]) ? S : never;
