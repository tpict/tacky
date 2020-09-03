import { BackgroundPositionArgs } from "./property";
import { CSSColor } from "./color";
import { CSSLengthPercentage, Percent, CSSAngle } from "./unit";
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

type InitialLinearColorStop = [
  color: CSSColor,
  stopStart?: CSSLengthPercentage,
  stopEnd?: CSSLengthPercentage
];

type LinearColorStop = InitialLinearColorStop;
type ColorHint = Percent;
type LinearColorStopOrHint = LinearColorStop | [ColorHint, ...LinearColorStop];

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
    V extends [LinearColorStopOrHint, ...LinearColorStopOrHint[]]
  >(
    ...args: [
      ...angle: T,
      colorStop: InitialLinearColorStop,
      ...colorStopOrHint: V
    ]
  ): Return;
}

export type LinearGradient = string & {
  _tacky_id_linear_gradient: never;
};

export const linearGradient: LinearGradientFunction<LinearGradient> = (
  ...args
) => {
  return `linear-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as LinearGradient;
};

export type RepeatingLinearGradient = string & {
  _tacky_id_repeating_linear_gradient: never;
};
export const repeatingLinearGradient: LinearGradientFunction<RepeatingLinearGradient> = (
  ...args
) => {
  return `repeating-linear-gradient(${args
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as RepeatingLinearGradient;
};

type RadialGradient = string & { _tacky_id_repeating_linear_gradient: never };
type RadialGradientShape = "circle" | "ellipse";
type RadialGradientExtentKeyword =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner";
export interface RadialGradientFunction<Return> {
  <
    T extends
      | [
          RadialGradientShape | RadialGradientExtentKeyword,
          ...([] | ["at", ...BackgroundPositionArgs])
        ]
      | [],
    V extends [LinearColorStopOrHint, ...LinearColorStopOrHint[]]
  >(
    ...args: [
      ...shape: T,
      colorStop: InitialLinearColorStop,
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

export type RepeatingRadialGradient = string & {
  _tacky_id_repeating_radial_gradient: never;
};
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
