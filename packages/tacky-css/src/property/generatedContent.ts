import { Property, Values } from "../generated/types";

type QuotesPair = [open: string, close: string];

declare module "../generated/types" {
  namespace Property {
    export interface Quotes {
      (...quotes: QuotesPair[]): PropertyTuple<"quotes">;
    }
  }
}

export const quotes: Property.Quotes = (...args: unknown[]) =>
  [
    "quotes",
    (Array.isArray(args[0])
      ? args
          .flat()
          .map(c => `"${c}"`)
          .join(" ")
      : args[0]) as Values["quotes"],
  ] as const;
