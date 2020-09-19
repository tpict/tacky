import * as CSS from "csstype";
import { Property, Values } from "../generated/types";

type FlexDirectionValue = Exclude<CSS.Property.FlexDirection, CSS.Globals>;
type FlexWrapValue = Exclude<CSS.Property.FlexWrap, CSS.Globals>;
type FlexBasisValue = Exclude<Parameters<Property.FlexBasis>[0], CSS.Globals>;

declare module "../generated/types" {
  namespace Property {
    export interface Flex {
      (grow: number, shrink: number): PropertyTuple<"flex">;
      (grow: number, basis: FlexBasisValue): PropertyTuple<"flex">;
      (grow: number, shrink: number, basis: FlexBasisValue): PropertyTuple<
        "flex"
      >;
    }

    export interface FlexFlow {
      (direction: FlexDirectionValue, wrap: FlexWrapValue): PropertyTuple<
        "flexFlow"
      >;
    }
  }
}

export const flex: Property.Flex = (...args: unknown[]) =>
  ["flex", args.join(" ") as Values["flex"]] as const;

export const flexFlow: Property.FlexFlow = (...args: unknown[]) =>
  ["flexFlow", args.join(" ") as Values["flexFlow"]] as const;
