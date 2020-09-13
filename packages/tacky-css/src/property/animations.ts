import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSTime } from "../unit";
import { PropertyTuple, knownUnionProperty } from "../utils";

export const animationDelay = <T extends string>(
  delay: KnownCSSValues<"animationDelay"> | CSSTime<T>
): PropertyTuple<"animationDelay"> => [
  "animationDelay",
  delay.toString() as TypedCSSProperties["animationDelay"],
];

export const animationDirection = knownUnionProperty("animationDirection");

export const animationDuration = <T extends string>(
  duration: KnownCSSValues<"animationDuration"> | CSSTime<T>
): PropertyTuple<"animationDuration"> => [
  "animationDuration",
  duration.toString() as TypedCSSProperties["animationDuration"],
];

export const animationFillMode = knownUnionProperty("animationFillMode");

export const animationIterationCount = <T extends string>(
  duration: KnownCSSValues<"animationIterationCount"> | CSSTime<T>
): PropertyTuple<"animationIterationCount"> => [
  "animationIterationCount",
  duration.toString() as TypedCSSProperties["animationIterationCount"],
];

export const animationPlayState = knownUnionProperty("animationPlayState");
