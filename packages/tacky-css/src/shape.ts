// TODO: path() support
import {
  BackgroundPositionArgs,
  BorderRadiusEllipticalCorners,
} from "./property";
import { TackyVariant } from "./types";
import { CSSLengthPercentage } from "./unit";
import { FourDimensionalArgs } from "./utils";

export type Inset = TackyVariant<"inset">;

export const inset = <T extends string>(
  ...args: [
    ...FourDimensionalArgs<CSSLengthPercentage<T>>,
    ...([] | ["round", ...BorderRadiusEllipticalCorners<T>])
  ]
): Inset => `inset(${args.join(" ")})` as Inset;

type ShapeRadius<T extends string> =
  | CSSLengthPercentage<T>
  | "closest-side"
  | "farthest-side";

export type Circle = TackyVariant<"circle">;

export const circle = <T extends string>(
  ...args: [
    ...radius: [] | [ShapeRadius<T>],
    ...position: [] | ["at", ...BackgroundPositionArgs<T>]
  ]
): Circle => `circle(${args.join(" ")})` as Circle;

export type Ellipse = TackyVariant<"ellipse">;

export const ellipse = <T extends string>(
  ...args: [
    ...radius: [] | [rx: ShapeRadius<T>, ry: ShapeRadius<T>],
    ...position: [] | ["at", ...BackgroundPositionArgs<T>]
  ]
): Ellipse => `ellipse(${args.join(" ")})` as Ellipse;

type FillRule = "nonzero" | "evenodd";
type Vertex<T extends string> = [
  xi: CSSLengthPercentage<T>,
  yi: CSSLengthPercentage<T>
];

export type Polygon = TackyVariant<"polygon">;

export const polygon = <T extends string>(
  ...args: [...fill: [] | [FillRule], ...vertices: [Vertex<T>, ...Vertex<T>[]]]
): Polygon =>
  `polygon(${(args as (string | string[])[])
    .map(arg => (Array.isArray(arg) ? arg.join(" ") : arg))
    .join(", ")})` as Polygon;

export type CSSShape = Inset | Circle | Ellipse | Polygon;
