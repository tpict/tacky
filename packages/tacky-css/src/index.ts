import { CSSObject } from "@emotion/react";

import * as color from "./color";
import * as funktion from "./function";
import * as image from "./image";
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
} as const;

type TackyArg = typeof tackyArg;

export const tacky = (callback: (_: TackyArg) => TypedCSSArray): CSSObject =>
  Object.fromEntries(callback(tackyArg));

export type Tacky = typeof tacky;
