import { FitContent } from "../function";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import {
  knownUnionProperty,
  PropertyTuple,
  FourDimensionalArgs,
} from "../utils";

export const height = <T extends string>(
  height: KnownCSSValues<"height"> | CSSLengthPercentage<T> | FitContent
): PropertyTuple<"height"> => [
  "height",
  height.toString() as TypedCSSProperties["height"],
];

// TODO: This is missing from the MDN page on Box Model module
export const margin = <T extends string>(...args: FourDimensionalArgs<T>) =>
  ["margin", args.join(" ") as TypedCSSProperties["margin"]] as const;

export const marginBottom = <T extends string>(
  marginBottom: CSSLengthPercentage<T>
): PropertyTuple<"marginBottom"> => [
  "marginBottom",
  marginBottom.toString() as TypedCSSProperties["marginBottom"],
];

export const marginLeft = <T extends string>(
  marginLeft: CSSLengthPercentage<T>
): PropertyTuple<"marginLeft"> => [
  "marginLeft",
  marginLeft.toString() as TypedCSSProperties["marginLeft"],
];

export const marginRight = <T extends string>(
  marginRight: CSSLengthPercentage<T>
): PropertyTuple<"marginRight"> => [
  "marginRight",
  marginRight.toString() as TypedCSSProperties["marginRight"],
];

export const marginTop = <T extends string>(
  marginTop: CSSLengthPercentage<T>
): PropertyTuple<"marginTop"> => [
  "marginTop",
  marginTop.toString() as TypedCSSProperties["marginTop"],
];

export const minHeight = <T extends string>(
  minHeight: CSSLengthPercentage<T>
): PropertyTuple<"minHeight"> => [
  "minHeight",
  minHeight.toString() as TypedCSSProperties["minHeight"],
];

export const minWidth = <T extends string>(
  minWidth: CSSLengthPercentage<T>
): PropertyTuple<"minWidth"> => [
  "minWidth",
  minWidth.toString() as TypedCSSProperties["minWidth"],
];

export const maxHeight = <T extends string>(
  maxHeight: CSSLengthPercentage<T>
): PropertyTuple<"maxHeight"> => [
  "maxHeight",
  maxHeight.toString() as TypedCSSProperties["maxHeight"],
];

export const maxWidth = <T extends string>(
  maxWidth: CSSLengthPercentage<T>
): PropertyTuple<"maxWidth"> => [
  "maxWidth",
  maxWidth.toString() as TypedCSSProperties["maxWidth"],
];

export const overscrollBehaviorBlock = knownUnionProperty(
  "overscrollBehaviorBlock"
);

export const overscrollBehaviorInline = knownUnionProperty(
  "overscrollBehaviorInline"
);

export const overscrollBehaviorX = knownUnionProperty("overscrollBehaviorX");

export const overscrollBehaviorY = knownUnionProperty("overscrollBehaviorY");

export const padding = <T extends string>(...args: FourDimensionalArgs<T>) =>
  ["padding", args.join(" ") as TypedCSSProperties["padding"]] as const;

export const paddingBottom = <T extends string>(
  paddingBottom: CSSLengthPercentage<T>
): PropertyTuple<"paddingBottom"> => [
  "paddingBottom",
  paddingBottom.toString() as TypedCSSProperties["paddingBottom"],
];

export const paddingLeft = <T extends string>(
  paddingLeft: CSSLengthPercentage<T>
): PropertyTuple<"paddingLeft"> => [
  "paddingLeft",
  paddingLeft.toString() as TypedCSSProperties["paddingLeft"],
];

export const paddingRight = <T extends string>(
  paddingRight: CSSLengthPercentage<T>
): PropertyTuple<"paddingRight"> => [
  "paddingRight",
  paddingRight.toString() as TypedCSSProperties["paddingRight"],
];

export const paddingTop = <T extends string>(
  paddingTop: CSSLengthPercentage<T>
): PropertyTuple<"paddingTop"> => [
  "paddingTop",
  paddingTop.toString() as TypedCSSProperties["paddingTop"],
];

export const visibility = knownUnionProperty<"visibility">("visibility");

export const width = <T extends string>(
  width: KnownCSSValues<"width"> | CSSLengthPercentage<T> | FitContent
): PropertyTuple<"width"> => [
  "width",
  width.toString() as TypedCSSProperties["width"],
];
