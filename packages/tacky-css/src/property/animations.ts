import { KnownCSSValues } from "../types";
import { CSSTime } from "../unit";
import { knownUnionProperty, variantProperty } from "../utils";

export const animationDelay = variantProperty<
  "animationDelay",
  KnownCSSValues<"animationDelay"> | CSSTime
>("animationDelay");

export const animationDirection = knownUnionProperty("animationDirection");

export const animationDuration = variantProperty<
  "animationDuration",
  KnownCSSValues<"animationDuration"> | CSSTime
>("animationDuration");

export const animationFillMode = knownUnionProperty("animationFillMode");

export const animationIterationCount = variantProperty<
  "animationIterationCount",
  KnownCSSValues<"animationIterationCount"> | CSSTime
>("animationIterationCount");

export const animationPlayState = knownUnionProperty("animationPlayState");
