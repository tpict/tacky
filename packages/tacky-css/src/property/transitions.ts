import { AnimatableProperties } from "../animation";
import { PropertyTuple } from "../utils";
import { CSSTime } from "../unit";
import { Values, Property } from "../generated/types";

declare module "../generated/types" {
  namespace Property {
    export interface TransitionDelay {
      (...delay: [CSSTime, ...CSSTime[]]): PropertyTuple<"transitionDelay">;
    }

    export interface TransitionDuration {
      (...delay: [CSSTime, ...CSSTime[]]): PropertyTuple<"transitionDuration">;
    }

    export interface TransitionProperty {
      (
        ...properties: [AnimatableProperties, ...AnimatableProperties[]]
      ): PropertyTuple<"transitionProperty">;
    }
  }
}

export const transitionDelay: Property.TransitionDelay = (...args: unknown[]) =>
  ["transitionDelay", args.join(", ") as Values["transitionDelay"]] as const;

export const transitionDuration: Property.TransitionDuration = (
  ...args: unknown[]
) =>
  [
    "transitionDuration",
    args.join(", ") as Values["transitionDuration"],
  ] as const;

export const transitionProperty = (
  ...args: unknown[]
): PropertyTuple<"transitionProperty"> =>
  [
    "transitionProperty",
    args.join(", ") as Values["transitionProperty"],
  ] as const;
