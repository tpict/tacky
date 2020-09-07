import * as CSS from "csstype";
import { PropertyTuple } from "../utils";

// TODO: Prevent duplicate keyword arguments
export type ContainValue = string & { _tacky_id_contain: never };

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
