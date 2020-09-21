// TODO: path() support
import {
  BackgroundPositionArgs,
  BorderRadiusEllipticalCorners,
} from "./property";
import { TackyVariant } from "./types";
import { CSSLengthPercentage } from "./unit";
import { FourDimensionalArgs } from "./utils";

export type Inset = TackyVariant<"inset">;

export const inset = (
  ...args: [
    ...FourDimensionalArgs,
    ...([] | ["round", ...BorderRadiusEllipticalCorners])
  ]
): Inset => `inset(${args.join(" ")})` as Inset;

type ShapeRadius = CSSLengthPercentage | "closest-side" | "farthest-side";

export type Circle = TackyVariant<"circle">;

export const circle = (
  ...args: [
    ...([] | [radius: ShapeRadius]),
    ...position: [] | ["at", ...BackgroundPositionArgs]
  ]
): Circle => `circle(${args.join(" ")})` as Circle;

export type Ellipse = TackyVariant<"ellipse">;

export const ellipse = (
  ...args: [
    ...([] | [rx: ShapeRadius, ry: ShapeRadius]),
    ...position: [] | ["at", ...BackgroundPositionArgs]
  ]
): Ellipse => `ellipse(${args.join(" ")})` as Ellipse;

type FillRule = "nonzero" | "evenodd";
type Vertex = [xi: CSSLengthPercentage, yi: CSSLengthPercentage];

export type Polygon = TackyVariant<"polygon">;

export const polygon = (
  ...args: [...([] | [fill: FillRule]), ...vertices: [Vertex, ...Vertex[]]]
): Polygon =>
  `polygon(${(args as (string | string[])[])
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as Polygon;

export type CSSShape = Inset | Circle | Ellipse | Polygon;
