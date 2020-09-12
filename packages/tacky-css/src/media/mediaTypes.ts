import { MediaType, MediaTypeExpression, MediaExpression } from "./types";

export function screen(): MediaType;
export function screen(
  ...expressions: [MediaExpression, ...MediaExpression[]]
): MediaTypeExpression;
export function screen(
  ...expressions: unknown[]
): MediaType | MediaTypeExpression {
  if (expressions.length === 0) {
    return "screen" as MediaType;
  }

  return `screen and ${expressions.join(" and ")}` as MediaTypeExpression;
}

export function print(): MediaType;
export function print(
  ...expressions: [MediaExpression, ...MediaExpression[]]
): MediaTypeExpression;
export function print(
  ...expressions: unknown[]
): MediaType | MediaTypeExpression {
  if (expressions.length === 0) {
    return "print" as MediaType;
  }

  return `print and ${expressions.join(" and ")}` as MediaTypeExpression;
}

export function speech(): MediaType;
export function speech(
  ...expressions: [MediaExpression, ...MediaExpression[]]
): MediaTypeExpression;
export function speech(
  ...expressions: unknown[]
): MediaType | MediaTypeExpression {
  if (expressions.length === 0) {
    return "speech" as MediaType;
  }

  return `speech and ${expressions.join(" and ")}` as MediaTypeExpression;
}
