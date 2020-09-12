import * as CSS from "csstype";
import { TackyVariant } from "../types";
import { PropertyTuple } from "../utils";

// TODO: Prevent duplicate keyword arguments
export type ContainValue = TackyVariant<"contain">;

type ContainUnaryKeyword = "none" | "strict" | "content";

type ContainMultipleKeyword = "size" | "layout" | "style" | "paint";

export interface Contain {
  (global: CSS.Globals): PropertyTuple<"contain">;
  (keyword: ContainUnaryKeyword | ContainMultipleKeyword): PropertyTuple<
    "contain"
  >;
  (...keywords: ContainMultipleKeyword[]): PropertyTuple<"contain">;
}

export const contain: Contain = (...args: unknown[]) =>
  ["contain", args.join(" ") as ContainValue] as const;
