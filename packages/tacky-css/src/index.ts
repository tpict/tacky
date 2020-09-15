import { CSSObject } from "@emotion/react";

import * as color from "./color";
import * as funktion from "./function";
import * as image from "./image";
import { media, Media } from "./media";
import * as property from "./property";
export * from "./types";
import * as unit from "./unit";

export { property, unit, color, funktion, Media };

import { TypedCSSArray } from "./types";

export const tackyArg = {
  ...color,
  ...funktion,
  ...image,
  ...property,
  ...unit,
  media,
} as const;

export type TackyArg = typeof tackyArg;

export const compile = (styles: TypedCSSArray): CSSObject =>
  styles.reduce((acc, [key, value]) => {
    // Investigate TS2590 without this cast
    acc[key as string] = Array.isArray(value) ? compile(value) : value;
    return acc;
  }, {} as CSSObject);

export const tacky = (callback: (_: TackyArg) => TypedCSSArray): CSSObject =>
  compile(callback(tackyArg));

export type Tacky = typeof tacky;
