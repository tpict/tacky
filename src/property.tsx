import * as CSS from "csstype";

import { TypedCSSProperties } from "./types";
import { CSSLength } from "./unit";
import { CSSColor } from "./color";

type PropertyTuple<T extends keyof TypedCSSProperties> = [
  T,
  TypedCSSProperties[T]
];

const singleArgProperty = <T extends keyof TypedCSSProperties>(property: T) => (
  value: TypedCSSProperties[T]
): PropertyTuple<T> => [property, value];

export const display = singleArgProperty("display");

export const color = singleArgProperty("color");
export const backgroundColor = singleArgProperty("backgroundColor");

export const lineHeight = singleArgProperty("lineHeight");
export const fontSize = singleArgProperty("fontSize");
export const fontFamily = (
  ...fontFamilies: [string, ...string[]]
): PropertyTuple<"fontFamily"> => [
  "fontFamily",
  fontFamilies
    .map(family => (family.includes(" ") ? `"${family}"` : family))
    .join(", "),
];

export const width = singleArgProperty("width");
export const minWidth = singleArgProperty("minWidth");
export const maxWidth = singleArgProperty("maxWidth");
export const height = singleArgProperty("height");
export const minHeight = singleArgProperty("minHeight");
export const maxHeight = singleArgProperty("maxHeight");

export const top = singleArgProperty("top");
export const right = singleArgProperty("right");
export const bottom = singleArgProperty("bottom");
export const left = singleArgProperty("left");

export const marginTop = singleArgProperty("marginTop");
export const marginLeft = singleArgProperty("marginLeft");
export const marginBottom = singleArgProperty("marginBottom");
export const marginRight = singleArgProperty("marginRight");

export const paddingTop = singleArgProperty("paddingTop");
export const paddingLeft = singleArgProperty("paddingLeft");
export const paddingBottom = singleArgProperty("paddingBottom");
export const paddingRight = singleArgProperty("paddingRight");

export interface FourDimensionalProperty {
  (value: CSSLength): unknown;
  (vertical: CSSLength, horizontal: CSSLength): unknown;
  (top: CSSLength, right: CSSLength, bottom: CSSLength): unknown;
  (
    top: CSSLength,
    right: CSSLength,
    bottom: CSSLength,
    left: CSSLength
  ): unknown;
}

export type FourDimensionalValue = string & {
  _tacky_id_four_d: never;
};

export const margin: FourDimensionalProperty = (
  ...args: unknown[]
): PropertyTuple<"margin"> => [
  "margin",
  args.join(" ") as FourDimensionalValue,
];

export const padding: FourDimensionalProperty = (
  ...args: unknown[]
): PropertyTuple<"padding"> => [
  "padding",
  args.join(" ") as FourDimensionalValue,
];

export type BoxShadowValue = string & {
  _tacky_id_boxShadow: never;
};

export interface BoxShadow {
  (
    offsetX: CSSLength,
    offsetY: CSSLength,
    blurRadius: CSSLength,
    spreadLength: CSSLength,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  (
    offsetX: CSSLength,
    offsetY: CSSLength,
    blurRadius: CSSLength,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  (offsetX: CSSLength, offsetY: CSSLength, color?: CSSColor): PropertyTuple<
    "boxShadow"
  >;
  (
    inset: "inset",
    offsetX: CSSLength,
    offsetY: CSSLength,
    blurRadius: CSSLength,
    spreadLength: CSSLength,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  (
    inset: "inset",
    offsetX: CSSLength,
    offsetY: CSSLength,
    blurRadius: CSSLength,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  (
    inset: "inset",
    offsetX: CSSLength,
    offsetY: CSSLength,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
}

export const boxShadow: BoxShadow = (
  ...args: unknown[]
): PropertyTuple<"boxShadow"> => [
  "boxShadow",
  args.join(" ") as BoxShadowValue,
];

export type FlexValue = string & {
  _tacky_id_flex: never;
};

export type FlexGrowShrink = number | CSS.Globals;
export type FlexBasis = CSSLength | "auto" | CSS.Globals;

export interface Flex {
  (grow: FlexGrowShrink): PropertyTuple<"flex">;
  (grow: FlexGrowShrink, shrink: FlexGrowShrink): PropertyTuple<"flex">;
  (grow: FlexGrowShrink, basis: FlexBasis): PropertyTuple<"flex">;
  (
    grow: FlexGrowShrink,
    shrink: FlexGrowShrink,
    basis: FlexBasis
  ): PropertyTuple<"flex">;
}

export const flex: Flex = (...args: unknown[]): PropertyTuple<"flex"> => [
  "flex",
  args.join(" ") as FlexValue,
];

export const alignContent = singleArgProperty("alignContent");
export const alignItems = singleArgProperty("alignItems");
export const alignSelf = singleArgProperty("alignSelf");
export const justifyContent = singleArgProperty("justifyContent");

export const borderColor = singleArgProperty("borderColor");
export const borderStyle = singleArgProperty("borderStyle");
export const borderTopColor = singleArgProperty("borderTopColor");
export const borderLeftColor = singleArgProperty("borderLeftColor");
export const borderBottomColor = singleArgProperty("borderBottomColor");
export const borderRightColor = singleArgProperty("borderRightColor");
export const borderTopWidth = singleArgProperty("borderTopWidth");
export const borderLeftWidth = singleArgProperty("borderLeftWidth");
export const borderBottomWidth = singleArgProperty("borderBottomWidth");
export const borderRightWidth = singleArgProperty("borderRightWidth");
export const borderWidth: FourDimensionalProperty = (
  ...args: unknown[]
): PropertyTuple<"borderWidth"> => [
  "borderWidth",
  args.join(" ") as FourDimensionalValue,
];
export const borderRadius: FourDimensionalProperty = (
  ...args: unknown[]
): PropertyTuple<"borderRadius"> => [
  "borderRadius",
  args.join(" ") as FourDimensionalValue,
];

export const all = singleArgProperty("all");
export const clear = singleArgProperty("clear");
export const cursor = singleArgProperty("cursor");
export const overflowX = singleArgProperty("overflowX");
export const overflowY = singleArgProperty("overflowY");
export const overscrollBehaviorX = singleArgProperty("overscrollBehaviorX");
export const overscrollBehaviorY = singleArgProperty("overscrollBehaviorY");
export const pointerEvents = singleArgProperty("pointerEvents");
export const position = singleArgProperty("position");
export const textAlign = singleArgProperty("textAlign");
export const textAlignLast = singleArgProperty("textAlignLast");
export const verticalAlign = singleArgProperty("verticalAlign");
export const visibility = singleArgProperty("visibility");
export const whiteSpace = singleArgProperty("whiteSpace");
export const wordBreak = singleArgProperty("wordBreak");
export const wordSpacing = singleArgProperty("wordSpacing");
export const wordWrap = singleArgProperty("wordWrap");
export const writingMode = singleArgProperty("writingMode");
export const zIndex = singleArgProperty("zIndex");
export const zoom = singleArgProperty("zoom");
export const userSelect = singleArgProperty("userSelect");
