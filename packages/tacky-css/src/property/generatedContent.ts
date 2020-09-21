import { TypedCSSProperties } from "../types";
import { PropertyTuple } from "../utils";

type QuotesPair = [open: string, close: string];

export const quotes = (...args: QuotesPair[]): PropertyTuple<"quotes"> => [
  "quotes",
  args
    .flat()
    .map(c => `"${c}"`)
    .join(" ") as TypedCSSProperties["quotes"],
];
