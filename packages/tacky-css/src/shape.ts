// TODO: path() support
import {
  BackgroundPositionArgs,
  BorderRadiusEllipticalCorners,
  FourDimensionalArgs,
} from "./property";
import { CSSLengthPercentage } from "./unit";

export type Inset = string & {
  _tacky_id_inset: never;
};

export const inset = (
  ...args: [
    ...FourDimensionalArgs,
    ...([] | ["round", ...BorderRadiusEllipticalCorners])
  ]
): Inset => `inset(${args.join(" ")})` as Inset;

type ShapeRadius = CSSLengthPercentage | "closest-side" | "farthest-side";

export type Circle = string & {
  _tacky_id_circle: never;
};

export const circle = (
  ...args: [
    ...([] | [radius: ShapeRadius]),
    ...position: [] | ["at", ...BackgroundPositionArgs]
  ]
): Circle => `circle(${args.join(" ")})` as Circle;

export type Ellipse = string & {
  _tacky_id_ellipse: never;
};

export const ellipse = (
  ...args: [
    ...([] | [rx: ShapeRadius, ry: ShapeRadius]),
    ...position: [] | ["at", ...BackgroundPositionArgs]
  ]
): Ellipse => `ellipse(${args.join(" ")})` as Ellipse;

type FillRule = "nonzero" | "evenodd";
type Vertex = [xi: CSSLengthPercentage, yi: CSSLengthPercentage];

export type Polygon = string & {
  _tacky_id_polygon: never;
};

export const polygon = (
  ...args: [...([] | [fill: FillRule]), ...vertices: [Vertex, ...Vertex[]]]
): Polygon =>
  `polygon(${(args as (string | string[])[])
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as Polygon;

export type CSSShape = Inset | Circle | Ellipse | Polygon;
