import { FitContent } from "../function";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import {
  knownUnionProperty,
  variantProperty,
  PropertyTuple,
  FourDimensionalArgs,
} from "../utils";

export const height = variantProperty<
  "height",
  KnownCSSValues<"height"> | CSSLengthPercentage | FitContent
>("height");

// TODO: This is missing from the MDN page on Box Model module
export const margin = (...args: FourDimensionalArgs) =>
  ["margin", args.join(" ") as TypedCSSProperties["margin"]] as const;

export const marginBottom = variantProperty<
  "marginBottom",
  CSSLengthPercentage
>("marginBottom");

export const marginLeft = variantProperty<"marginLeft", CSSLengthPercentage>(
  "marginLeft"
);

export const marginRight = variantProperty<"marginRight", CSSLengthPercentage>(
  "marginRight"
);

export const marginTop = variantProperty<"marginTop", CSSLengthPercentage>(
  "marginTop"
);

export const minHeight = variantProperty<"minHeight", CSSLengthPercentage>(
  "minHeight"
);

export const minWidth = variantProperty<"minWidth", CSSLengthPercentage>(
  "minWidth"
);

export const maxHeight = variantProperty<"maxHeight", CSSLengthPercentage>(
  "maxHeight"
);

export const maxWidth = variantProperty<"maxWidth", CSSLengthPercentage>(
  "maxWidth"
);

export const overscrollBehaviorBlock = knownUnionProperty(
  "overscrollBehaviorBlock"
);

export const overscrollBehaviorInline = knownUnionProperty(
  "overscrollBehaviorInline"
);

export const overscrollBehaviorX = knownUnionProperty("overscrollBehaviorX");

export const overscrollBehaviorY = knownUnionProperty("overscrollBehaviorY");

export const padding = (
  ...args: FourDimensionalArgs
): PropertyTuple<"padding"> =>
  ["padding", args.join(" ") as TypedCSSProperties["padding"]] as const;

export const paddingBottom = variantProperty<
  "paddingBottom",
  CSSLengthPercentage
>("paddingBottom");

export const paddingLeft = variantProperty<"paddingLeft", CSSLengthPercentage>(
  "paddingLeft"
);

export const paddingRight = variantProperty<
  "paddingRight",
  CSSLengthPercentage
>("paddingRight");

export const paddingTop = variantProperty<"paddingTop", CSSLengthPercentage>(
  "paddingTop"
);

export const visibility = variantProperty<"visibility", CSSLengthPercentage>(
  "visibility"
);

export const width = variantProperty<
  "width",
  KnownCSSValues<"width"> | CSSLengthPercentage | FitContent
>("width");
