import { MediaExpression } from "./types";

export const and = (...expressions: MediaExpression[]): MediaExpression =>
  expressions.join(" and ") as MediaExpression;
