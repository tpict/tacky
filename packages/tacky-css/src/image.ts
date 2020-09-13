import { BackgroundPositionArgs } from "./property";
import { CSSColor } from "./color";
import { CSSLengthPercentage, CSSPercentage, CSSAngle } from "./unit";
import { TackyVariant } from "./types";
import { CSSURL } from "./function";

type SideOrCorner =
  | "to top"
  | "to top left"
  | "to top right"
  | "to bottom"
  | "to bottom left"
  | "to bottom right"
  | "to left"
  | "to left top"
  | "to left bottom"
  | "to right"
  | "to right top"
  | "to right bottom";

type InitialLinearColorStop<T extends string> = [
  color: CSSColor,
  stopStart?: CSSLengthPercentage<T>,
  stopEnd?: CSSLengthPercentage<T>
];

type LinearColorStop<T extends string> = InitialLinearColorStop<T>;
type ColorHint<T extends string> = CSSPercentage<T>;
type LinearColorStopOrHint<T extends string> =
  | LinearColorStop<T>
  | [ColorHint<T>, ...LinearColorStop<T>];

// Ideally <color-hint> would be expressed in a way that matches the CSS syntax
// more closely, i.e.
//
// linearGradient(
//   "to top",
//   ["red", percent(10), percent(40)],
//   percent(50),  <- <color-hint>
//   ["blue"]
// );
//
// The constraints we have are:
//
// 1. <color-hint> must be after at least one <linear-color-stop>
// 2. No two neighboring arguments can both be a <color-hint>
// 3. Final argument must be a <linear-color-stop>
//
// This is difficult because:
// - Variadic tuples lose type strictness for elements following a spread
//   over a tuple of unknown length, and the "middle" arguments in a linear
//   gradient can be of any length
// - Recursively spreading a tuple isn't officially supported
//   https://github.com/microsoft/TypeScript/issues/40298
//
// The current solution combines <linear-color-stop> and <color-hint> for all
// but the 3rd argument to the nth argument. I dislike this departure from the
// CSS spec, but it does satisfy all three constaints.

export interface LinearGradientFunction<Return> {
  <
    T extends [CSSAngle | SideOrCorner] | [],
    U extends string,
    V extends [LinearColorStopOrHint<U>, ...LinearColorStopOrHint<U>[]]
  >(
    ...args: [
      ...angle: T,
      colorStop: InitialLinearColorStop<U>,
      ...colorStopOrHint: V
    ]
  ): Return;
}

export type LinearGradient = TackyVariant<"linearGradient">;
export const linearGradient: LinearGradientFunction<LinearGradient> = (
  ...args
) => {
  return `linear-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as LinearGradient;
};

export type RepeatingLinearGradient = TackyVariant<"repeatingLinearGradient">;
export const repeatingLinearGradient: LinearGradientFunction<RepeatingLinearGradient> = (
  ...args
) => {
  return `repeating-linear-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as RepeatingLinearGradient;
};

export type RadialGradient = TackyVariant<"RadialGradient">;
type RadialGradientShape = "circle" | "ellipse";
type RadialGradientExtentKeyword =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner";
export interface RadialGradientFunction<Return> {
  <
    U extends string,
    T extends
      | [
          RadialGradientShape | RadialGradientExtentKeyword,
          ...([] | ["at", ...BackgroundPositionArgs<U>])
        ]
      | [],
    V extends [LinearColorStopOrHint<U>, ...LinearColorStopOrHint<U>[]]
  >(
    ...args: [
      ...shape: T,
      colorStop: InitialLinearColorStop<U>,
      ...colorStopOrHint: V
    ]
  ): Return;
}
export const radialGradient: RadialGradientFunction<RadialGradient> = (
  ...args
) => {
  return `radial-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as RadialGradient;
};

export type RepeatingRadialGradient = TackyVariant<"RepeatingRadialGradient">;
export const repeatingRadialGradient: RadialGradientFunction<RepeatingRadialGradient> = (
  ...args
) => {
  return `repeating-radial-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as RepeatingRadialGradient;
};

// TODO: conical-gradient()
export type CSSGradient =
  | LinearGradient
  | RepeatingLinearGradient
  | RadialGradient
  | RepeatingRadialGradient;

// TODO: cross-fade()
// TODO: image-set()
export type CSSImage = CSSURL | CSSGradient;
