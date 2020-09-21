import { CSSColor } from "../color";
import { KnownCSSValues } from "../types";
import { CSSLength } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const boxSizing = knownUnionProperty("boxSizing");

export const caretColor = variantProperty<"caretColor", CSSColor | "auto">(
  "caretColor"
);

export const cursor = knownUnionProperty("cursor");

export const outlineColor = variantProperty<"outlineColor", CSSColor>(
  "outlineColor"
);

export const outlineStyle = knownUnionProperty("outlineStyle");

export const outlineWidth = variantProperty<
  "outlineWidth",
  KnownCSSValues<"outlineWidth"> | CSSLength
>("outlineWidth");

export const resize = knownUnionProperty("resize");

export const textOverflow = knownUnionProperty("textOverflow");

export const userSelect = knownUnionProperty("userSelect");
