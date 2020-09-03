import { CSSObject } from "@emotion/react";

import * as color from "./color";
import * as property from "./property";
import * as unit from "./unit";
import { TypedCSSArray } from "./types";

export { property, unit, color };

const tackyArg = {
  ...color,
  ...property,
  ...unit,
} as const;

type TackyArg = typeof tackyArg;

export const tacky = (callback: (_: TackyArg) => TypedCSSArray): CSSObject =>
  Object.fromEntries(callback(tackyArg));

export type Tacky = typeof tacky;
