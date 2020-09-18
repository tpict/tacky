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

type RequiredCSSArray = [TypedCSSArray[number], ...TypedCSSArray];

const mediaHelpers = {
  ...mediaFeatures,
  ...mediaTypes,
  ...operators,
} as const;

type MediaHelpers = typeof mediaHelpers;

export interface Media extends MediaHelpers {
  (
    expressions: [AnyMediaMember, ...AnyMediaMember[]],
    ...styles: RequiredCSSArray
  ): [MediaQuery, TypedCSSArray];
  (
    expressions: [
      "not" | "only",
      MediaType | MediaTypeExpression,
      ...AnyMediaMember[]
    ],
    ...styles: RequiredCSSArray
  ): [MediaQuery, TypedCSSArray];
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
