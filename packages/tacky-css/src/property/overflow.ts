import * as CSS from "csstype";
import { KnownCSSValues } from "../types";
import { PropertyTuple, singleArgProperty } from "../utils";

type OverflowKeyword = Exclude<KnownCSSValues<"overflow">, CSS.Globals>;

export type OverflowValue = string & { _tacky_id_overflow: never };

export interface Overflow {
  (xy: OverflowKeyword | CSS.Globals): PropertyTuple<"overflow">;
  (x: OverflowKeyword, y: OverflowKeyword): PropertyTuple<"overflow">;
}

export const overflow: Overflow = (...args: unknown[]) =>
  ["overflow", args.join(" ") as OverflowValue] as const;

export const overflowX = singleArgProperty("overflowX");

export const overflowY = singleArgProperty("overflowY");
