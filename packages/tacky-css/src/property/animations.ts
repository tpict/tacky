// TODO: Multiple values for each of these
import { Property, Values } from "../generated/types";

export const animationDelay: Property.AnimationDelay = (arg: unknown) =>
  ["animationDelay", arg as Values["animationDelay"]] as const;

export const animationDirection: Property.AnimationDirection = (arg: unknown) =>
  ["animationDirection", arg as Values["animationDirection"]] as const;

export const animationDuration: Property.AnimationDuration = (arg: unknown) =>
  ["animationDuration", arg as Values["animationDuration"]] as const;

export const animationFillMode: Property.AnimationFillMode = (arg: unknown) =>
  ["animationFillMode", arg as Values["animationFillMode"]] as const;

export const animationIterationCount: Property.AnimationIterationCount = (
  arg: unknown
) =>
  [
    "animationIterationCount",
    arg as Values["animationIterationCount"],
  ] as const;

export const animationPlayState: Property.AnimationPlayState = (arg: unknown) =>
  ["animationPlayState", arg as Values["animationPlayState"]] as const;
