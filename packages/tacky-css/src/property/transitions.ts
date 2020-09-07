import * as CSS from "csstype";
import { AnimatableProperties } from "../animation";
import { PropertyTuple } from "../utils";
import { CSSTime } from "../unit";

export type TransitionDelayValue = string & {
  _tacky_id_transition_delay: never;
};

export const transitionDelay = (
  ...args: [keyword: CSS.Globals] | [...delay: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDelay"> =>
  ["transitionDelay", args.join(", ") as TransitionDelayValue] as const;

export type TransitionDurationValue = string & {
  _tacky_id_transition_duration: never;
};
export const transitionDuration = (
  ...args: [keyword: CSS.Globals] | [...duration: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDuration"> =>
  ["transitionDuration", args.join(", ") as TransitionDurationValue] as const;

export type TransitionPropertyValue = string & {
  _tacky_id_transition_property: never;
};

export const transitionProperty = (
  ...args:
    | [keyword: CSS.Globals | "all" | "none"]
    | [...properties: [AnimatableProperties, ...AnimatableProperties[]]]
): PropertyTuple<"transitionProperty"> =>
  ["transitionProperty", args.join(", ") as TransitionPropertyValue] as const;
