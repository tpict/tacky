import { CSSObject } from "@emotion/react";

import * as color from "./color";
import * as funktion from "./function";
import * as image from "./image";
import { media } from "./media";
import * as property from "./property";
import * as unit from "./unit";

export { property, unit, color, funktion };

import { TypedCSSArray } from "./types";

const tackyArg = {
  ...color,
  ...funktion,
  ...image,
  ...property,
  ...unit,
  media,
} as const;

type TackyArg = typeof tackyArg;

const compile = (styles: TypedCSSArray): CSSObject =>
  styles.reduce((acc, [key, value]) => {
    // Investigate TS2590 without this cast
    acc[key as string] = Array.isArray(value) ? compile(value) : value;
    return acc;
  }, {} as CSSObject);

export const tacky = (callback: (_: TackyArg) => TypedCSSArray): CSSObject =>
  compile(callback(tackyArg));

export type Tacky = typeof tacky;
