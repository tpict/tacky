import { CSSColor } from "../color";
import { knownUnionProperty, variantProperty } from "../utils";

export const color = variantProperty<"color", CSSColor>("color");
export const colorAdjust = knownUnionProperty("colorAdjust");
export const opacity = knownUnionProperty("opacity");
