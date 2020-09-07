import * as CSS from "csstype";
import { TypedCSSProperties } from "../types";
import { singleArgProperty, PropertyTuple } from "../utils";

export interface Flex {
  (grow: FlexGrow): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink): PropertyTuple<"flex">;
  (grow: FlexGrow, basis: FlexBasis): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink, basis: FlexBasis): PropertyTuple<"flex">;
}

export type FlexValue = string & {
  _tacky_id_flex: never;
};

export const flex: Flex = (...args: unknown[]): PropertyTuple<"flex"> => [
  "flex",
  args.join(" ") as FlexValue,
];

export const flexDirection = singleArgProperty("flexDirection");

export type FlexFlowValue = string & { _tacky_id_flex_flow: never };

type FlexDirection = Exclude<CSS.Property.FlexDirection, CSS.Globals>;

type FlexWrap = Exclude<CSS.Property.FlexWrap, CSS.Globals>;

export interface FlexFlow {
  (global: CSS.Globals): PropertyTuple<"flexFlow">;
  (direction: FlexDirection): PropertyTuple<"flexFlow">;
  (wrap: FlexWrap): PropertyTuple<"flexFlow">;
  (direction: FlexDirection, wrap: FlexWrap): PropertyTuple<"flexFlow">;
}

export const flexFlow: FlexFlow = (...args: unknown[]) =>
  ["flexFlow", args.join(" ") as FlexFlowValue] as const;

type FlexGrow = TypedCSSProperties["flexGrow"];

export const flexGrow = singleArgProperty("flexGrow");

type FlexBasis = TypedCSSProperties["flexBasis"];

export const flexBasis = singleArgProperty("flexBasis");

type FlexShrink = TypedCSSProperties["flexGrow"];

export const flexShrink = singleArgProperty("flexShrink");

export const flexWrap = singleArgProperty("flexWrap");

export const order = singleArgProperty("order");
