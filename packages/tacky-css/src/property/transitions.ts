import * as CSS from "csstype";
import { AnimatableProperties } from "../animation";
import { PropertyTuple } from "../utils";
import { CSSTime } from "../unit";
import { TypedCSSProperties } from "../types";

export const transitionDelay = <T extends string>(
  ...args: [keyword: CSS.Globals] | [...delay: [CSSTime<T>, ...CSSTime<T>[]]]
): PropertyTuple<"transitionDelay"> =>
  [
    "transitionDelay",
    args.join(", ") as TypedCSSProperties["transitionDelay"],
  ] as const;

export const transitionDuration = <T extends string>(
  ...args: [keyword: CSS.Globals] | [...duration: [CSSTime<T>, ...CSSTime<T>[]]]
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
