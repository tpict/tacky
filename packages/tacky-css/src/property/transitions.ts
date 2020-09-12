import * as CSS from "csstype";
import { AnimatableProperties } from "../animation";
import { PropertyTuple } from "../utils";
import { CSSTime } from "../unit";
import { TypedCSSProperties } from "../types";

export const transitionDelay = (
  ...args: [keyword: CSS.Globals] | [...delay: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDelay"> =>
  [
    "transitionDelay",
    args.join(", ") as TypedCSSProperties["transitionDelay"],
  ] as const;

export const transitionDuration = (
  ...args: [keyword: CSS.Globals] | [...duration: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDuration"> =>
  [
    "transitionDuration",
    args.join(", ") as TypedCSSProperties["transitionDuration"],
  ] as const;

export const transitionProperty = (
  ...args:
    | [keyword: CSS.Globals | "all" | "none"]
    | [...properties: [AnimatableProperties, ...AnimatableProperties[]]]
): PropertyTuple<"transitionProperty"> =>
  [
    "transitionProperty",
    args.join(", ") as TypedCSSProperties["transitionProperty"],
  ] as const;
