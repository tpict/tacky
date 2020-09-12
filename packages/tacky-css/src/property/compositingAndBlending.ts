import * as CSS from "csstype";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { knownUnionProperty, PropertyTuple } from "../utils";

type BackgroundBlendMode = Exclude<
  KnownCSSValues<"backgroundBlendMode">,
  CSS.Globals
>;

export const backgroundBlendMode = (
  ...attachment: [CSS.Globals] | [BackgroundBlendMode, ...BackgroundBlendMode[]]
): PropertyTuple<"backgroundBlendMode"> => [
  "backgroundBlendMode",
  attachment.join(", ") as TypedCSSProperties["backgroundBlendMode"],
];

export const isolation = knownUnionProperty("isolation");

export const mixBlendMode = knownUnionProperty("mixBlendMode");
