import * as CSS from "csstype";
import { Values } from "./generated/types";
import { MediaQuery } from "./media/types";

// Terminology taken from ReasonML - the idea is something like a variant that
// takes a single string arg, so the type system can distinguish strings from
// different sources even if their values aren't known.
//
// TODO: In TS 4.1 use
// export type TackyVariant<T extends string> = string & {[_ in T as `_tacky_id_${T}`]: never };
// This is safer as users will be less likely to access the "brand" property
// (which is removed by the Babel macro)
export type TackyVariant<T extends string> = string & { _tacky_id: T };

export type KnownCSSValues<
  T extends keyof CSS.Properties<never>,
  U extends CSS.Properties[T] = CSS.Properties[T]
> = U extends string | number | symbol
  ? {
      [K in U]: string extends K ? never : number extends K ? never : K;
    } extends { [_ in U]: infer U }
    ? // eslint-disable-next-line @typescript-eslint/ban-types
      {} extends U
      ? never
      : U
    : never
  : never;

export type TypedCSSArray = (
  | {
      [P in keyof Values]: readonly [P, Values[P]];
    }[keyof Values]
  | [MediaQuery, TypedCSSArray]
)[];
