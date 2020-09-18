import { Values, Property } from "../generated/types";

type ContainMultipleKeyword = "size" | "layout" | "style" | "paint";

declare module "../generated/types" {
  namespace Property {
    export interface Contain {
      // TODO: Prevent duplicate keyword arguments
      (...keywords: ContainMultipleKeyword[]): PropertyTuple<"contain">;
    }
  }
}

export const contain: Property.Contain = (...args: unknown[]) =>
  ["contain", args.join(" ") as Values["contain"]] as const;
