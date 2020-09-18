import { TackyVariant } from "../types";

// e.g. (min-width: 30rem)
export type MediaExpression = TackyVariant<"media_expression">;

// e.g. screen
export type MediaType = TackyVariant<"media_type">;

// e.g. screen and (min-width: 30rem)
export type MediaTypeExpression = TackyVariant<"media_expression">;

export type AnyMediaMember = MediaType | MediaExpression | MediaTypeExpression;

// e.g. @media screen and (min-width: 30rem)
export type MediaQuery = TackyVariant<"media_query">;
