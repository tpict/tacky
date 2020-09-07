import {
  singleArgProperty,
  PropertyTuple,
  FourDimensionalArgs,
  FourDimensionalValue,
} from "../utils";

// TODO: Fix this
export const height = singleArgProperty("height");

// TODO: This is missing from the MDN page on Box Model module
export const margin = (...args: FourDimensionalArgs): PropertyTuple<"margin"> =>
  ["margin", args.join(" ") as FourDimensionalValue] as const;

export const marginBottom = singleArgProperty("marginBottom");

export const marginLeft = singleArgProperty("marginLeft");

export const marginRight = singleArgProperty("marginRight");

export const marginTop = singleArgProperty("marginTop");

export const minHeight = singleArgProperty("minHeight");

export const minWidth = singleArgProperty("minWidth");

export const maxHeight = singleArgProperty("maxHeight");

export const maxWidth = singleArgProperty("maxWidth");

export const overscrollBehaviorBlock = singleArgProperty(
  "overscrollBehaviorBlock"
);

export const overscrollBehaviorInline = singleArgProperty(
  "overscrollBehaviorInline"
);

export const overscrollBehaviorX = singleArgProperty("overscrollBehaviorX");

export const overscrollBehaviorY = singleArgProperty("overscrollBehaviorY");

export const padding = (
  ...args: FourDimensionalArgs
): PropertyTuple<"padding"> =>
  ["padding", args.join(" ") as FourDimensionalValue] as const;

export const paddingBottom = singleArgProperty("paddingBottom");

export const paddingLeft = singleArgProperty("paddingLeft");

export const paddingRight = singleArgProperty("paddingRight");

export const paddingTop = singleArgProperty("paddingTop");

export const visibility = singleArgProperty("visibility");

// TODO: Fix this
export const width = singleArgProperty("width");
