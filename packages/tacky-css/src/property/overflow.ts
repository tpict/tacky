import * as CSS from "csstype";
import { KnownCSSValues } from "../types";
import { Property, Values } from "../generated/types";

type OverflowKeyword = Exclude<KnownCSSValues<"overflow">, CSS.Globals>;

declare module "../generated/types" {
  namespace Property {
    export interface Overflow {
      (x: OverflowKeyword, y: OverflowKeyword): PropertyTuple<"overflow">;
    }
  }
}

export const overflow: Property.Overflow = (...args: unknown[]) =>
  ["overflow", args.join(" ") as Values["overflow"]] as const;
