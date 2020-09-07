import * as CSS from "csstype";
import { KnownCSSValues } from "../types";
import { singleArgProperty, PropertyTuple } from "../utils";

type BackgroundBlendMode = Exclude<
  KnownCSSValues<"backgroundBlendMode">,
  CSS.Globals
>;

export type BackgroundBlendModeValue = string & {
  _tacky_id_background_blend_mode: never;
};

export const backgroundBlendMode = (
  ...attachment: [CSS.Globals] | [BackgroundBlendMode, ...BackgroundBlendMode[]]
): PropertyTuple<"backgroundBlendMode"> => [
  "backgroundBlendMode",
  attachment.join(", ") as BackgroundBlendModeValue,
];

export const isolation = singleArgProperty("isolation");

export const mixBlendMode = singleArgProperty("mixBlendMode");
