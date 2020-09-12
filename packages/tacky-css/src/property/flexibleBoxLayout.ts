import * as CSS from "csstype";
import { TypedCSSProperties } from "../types";
import { knownUnionProperty, PropertyTuple } from "../utils";

export interface Flex {
  (grow: FlexGrow): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink): PropertyTuple<"flex">;
  (grow: FlexGrow, basis: FlexBasis): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink, basis: FlexBasis): PropertyTuple<"flex">;
}

export const flex: Flex = (...args: unknown[]) =>
  ["flex", args.join(" ") as TypedCSSProperties["flex"]] as const;

export const flexDirection = knownUnionProperty("flexDirection");

type FlexDirection = Exclude<CSS.Property.FlexDirection, CSS.Globals>;

type FlexWrap = Exclude<CSS.Property.FlexWrap, CSS.Globals>;

export interface FlexFlow {
  (global: CSS.Globals): PropertyTuple<"flexFlow">;
  (direction: FlexDirection): PropertyTuple<"flexFlow">;
  (wrap: FlexWrap): PropertyTuple<"flexFlow">;
  (direction: FlexDirection, wrap: FlexWrap): PropertyTuple<"flexFlow">;
}

export const flexFlow: FlexFlow = (...args: unknown[]) =>
  ["flexFlow", args.join(" ") as TypedCSSProperties["flexFlow"]] as const;

type FlexGrow = TypedCSSProperties["flexGrow"];

export const flexGrow = knownUnionProperty("flexGrow");

type FlexBasis = TypedCSSProperties["flexBasis"];

export const flexBasis = knownUnionProperty("flexBasis");

type FlexShrink = TypedCSSProperties["flexGrow"];

export const flexShrink = knownUnionProperty("flexShrink");

export const flexWrap = knownUnionProperty("flexWrap");

export const order = knownUnionProperty("order");
