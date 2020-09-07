import { PropertyTuple } from "../utils";

type QuotesPair = [open: string, close: string];

export type QuotesValue = string & { _tacky_id_quotes: never };

export const quotes = (...args: QuotesPair[]): PropertyTuple<"quotes"> => [
  "quotes",
  args
    .flat()
    .map(c => `"${c}"`)
    .join(" ") as QuotesValue,
];
