import { Values, Property } from "../generated/types";
import { FourDimensionalArgs } from "../utils";

declare module "../generated/types" {
  namespace Property {
    export interface Margin {
      (...args: FourDimensionalArgs): PropertyTuple<"margin">;
    }

    export interface Padding {
      (...args: FourDimensionalArgs): PropertyTuple<"padding">;
    }
  }
}

// TODO: This is missing from the MDN page on Box Model module
export const margin: Property.Margin = (...args: unknown[]) =>
  ["margin", args.join(" ") as Values["margin"]] as const;

export const padding: Property.Padding = (...args: unknown[]) =>
  ["padding", args.join(" ") as Values["padding"]] as const;
