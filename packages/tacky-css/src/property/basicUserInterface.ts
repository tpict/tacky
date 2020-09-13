import { CSSColor } from "../color";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLength } from "../unit";
import { knownUnionProperty, PropertyTuple, variantProperty } from "../utils";

export const boxSizing = knownUnionProperty("boxSizing");

export const caretColor = variantProperty<"caretColor", CSSColor | "auto">(
  "caretColor"
);

export const cursor = knownUnionProperty("cursor");

export const outlineColor = variantProperty<"outlineColor", CSSColor>(
  "outlineColor"
);

export const outlineStyle = knownUnionProperty("outlineStyle");

export const outlineWidth = <T extends string>(
  width: KnownCSSValues<"outlineWidth"> | CSSLength<T>
): PropertyTuple<"outlineWidth"> =>
  [
    "outlineWidth",
    width.toString() as TypedCSSProperties["outlineWidth"],
  ] as const;

export const resize = knownUnionProperty("resize");

export const textOverflow = knownUnionProperty("textOverflow");

export const userSelect = knownUnionProperty("userSelect");
