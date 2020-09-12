import * as CSS from "csstype";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { PropertyTuple, knownUnionProperty } from "../utils";

type OverflowKeyword = Exclude<KnownCSSValues<"overflow">, CSS.Globals>;

export interface Overflow {
  (xy: OverflowKeyword | CSS.Globals): PropertyTuple<"overflow">;
  (x: OverflowKeyword, y: OverflowKeyword): PropertyTuple<"overflow">;
}

export const overflow: Overflow = (...args: unknown[]) =>
  ["overflow", args.join(" ") as TypedCSSProperties["overflow"]] as const;

export const overflowX = knownUnionProperty("overflowX");

export const overflowY = knownUnionProperty("overflowY");
