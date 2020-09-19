import * as CSS from "csstype";
import { KnownCSSValues } from "../types";
import { Property, Values } from "../generated/types";

type BackgroundBlendModeValue = Exclude<
  KnownCSSValues<"backgroundBlendMode">,
  CSS.Globals
>;

declare module "../generated/types" {
  namespace Property {
    export interface BackgroundBlendMode {
      (
        ...attachment: [BackgroundBlendModeValue, ...BackgroundBlendModeValue[]]
      ): PropertyTuple<"backgroundBlendMode">;
    }
  }
}

export const backgroundBlendMode: Property.BackgroundBlendMode = (
  ...args: unknown[]
) =>
  [
    "backgroundBlendMode",
    (args as string[]).join(", ") as Values["backgroundBlendMode"],
  ] as const;
