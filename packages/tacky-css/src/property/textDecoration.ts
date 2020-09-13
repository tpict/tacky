import * as CSS from "csstype";
import { CSSColor } from "../color";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLengthPercentage } from "../unit";
import { knownUnionProperty, PropertyTuple, variantProperty } from "../utils";

export const textDecorationColor = variantProperty<
  "textDecorationColor",
  CSSColor
>("textDecorationColor");

type TextDecorationLineKeyword = "underline" | "overline" | "line-through";

// TODO: Prevent duplicate keyword arguments
export const textDecorationLineValue = (
  ...args:
    | [keyword: CSS.Globals | "none"]
    | [...lines: [TextDecorationLineKeyword, ...TextDecorationLineKeyword[]]]
): PropertyTuple<"textDecorationLine"> =>
  [
    "textDecorationLine",
    args.join(" ") as TypedCSSProperties["textDecorationLine"],
  ] as const;

export const textDecorationSkipInk = knownUnionProperty(
  "textDecorationSkipInk"
);

export const textDecorationStyle = knownUnionProperty("textDecorationStyle");

export const textDecorationThickness = <T extends string>(
  thickness: KnownCSSValues<"textDecorationThickness"> | CSSLengthPercentage<T>
): PropertyTuple<"textDecorationThickness"> =>
  [
    "textDecorationThickness",
    thickness.toString() as TypedCSSProperties["textDecorationThickness"],
  ] as const;

type TextShadowArgs<T extends string> =
  | [offsetX: CSSLengthPercentage<T>, offsetY: CSSLengthPercentage<T>]
  | [
      offsetX: CSSLengthPercentage<T>,
      offsetY: CSSLengthPercentage<T>,
      color: CSSColor
    ]
  | [
      offsetX: CSSLengthPercentage<T>,
      offsetY: CSSLengthPercentage<T>,
      blurRadius: CSSLengthPercentage<T>
    ]
  | [
      offsetX: CSSLengthPercentage<T>,
      offsetY: CSSLengthPercentage<T>,
      blurRadius: CSSLengthPercentage<T>,
      color: CSSColor
    ];

export interface TextShadow {
  (global: CSS.Globals): PropertyTuple<"textShadow">;
  <T extends string>(...args: TextShadowArgs<T>): PropertyTuple<"textShadow">;
  <T extends string>(
    ...args: [TextShadowArgs<T>, ...TextShadowArgs<T>[]]
  ): PropertyTuple<"textShadow">;
}

export const textShadow: TextShadow = (
  ...args: unknown[]
): PropertyTuple<"textShadow"> => [
  "textShadow",
  (Array.isArray(args[0])
    ? args.map(shadow => (shadow as string[]).join(" ")).join("; ")
    : args.join(" ")) as TypedCSSProperties["textShadow"],
];
