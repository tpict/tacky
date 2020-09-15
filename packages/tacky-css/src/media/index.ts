import { TypedCSSArray } from "../types";
import * as mediaFeatures from "./mediaFeatures";
import * as mediaTypes from "./mediaTypes";
import * as operators from "./mediaTypes";
import {
  AnyMediaMember,
  MediaType,
  MediaTypeExpression,
  MediaQuery,
} from "./types";

type RequiredArray<T extends unknown[]> = [T[number], ...T];

const mediaHelpers = {
  ...mediaFeatures,
  ...mediaTypes,
  ...operators,
} as const;

type MediaHelpers = typeof mediaHelpers;

export interface Media<T extends unknown[] = TypedCSSArray>
  extends MediaHelpers {
  (
    expressions: [AnyMediaMember, ...AnyMediaMember[]],
    ...styles: RequiredArray<T>
  ): [MediaQuery, T];
  (
    expressions: [
      "not" | "only",
      MediaType | MediaTypeExpression,
      ...AnyMediaMember[]
    ],
    ...styles: RequiredArray<T>
  ): [MediaQuery, T];
}

export const media: Media = Object.assign(
  (((expressions: string[], ...styles: unknown[]) => {
    let joinedExpressions: string;
    if (["not", "only"].includes(expressions[0])) {
      joinedExpressions = `${expressions[0]} ${expressions
        .slice(1)
        .join(", ")}`;
    } else {
      joinedExpressions = expressions.join(", ");
    }

    return [`@media ${joinedExpressions}`, styles];
  }) as unknown) as Media,
  mediaHelpers
);
