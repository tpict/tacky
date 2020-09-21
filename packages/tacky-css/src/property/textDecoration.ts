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

export const textDecorationThickness = variantProperty<
  "textDecorationThickness",
  KnownCSSValues<"textDecorationThickness"> | CSSLengthPercentage
>("textDecorationThickness");

type TextShadowArgs =
  | [offsetX: CSSLengthPercentage, offsetY: CSSLengthPercentage]
  | [
      offsetX: CSSLengthPercentage,
      offsetY: CSSLengthPercentage,
      color: CSSColor
    ]
  | [
      offsetX: CSSLengthPercentage,
      offsetY: CSSLengthPercentage,
      blurRadius: CSSLengthPercentage
    ]
  | [
      offsetX: CSSLengthPercentage,
      offsetY: CSSLengthPercentage,
      blurRadius: CSSLengthPercentage,
      color: CSSColor
    ];

export interface TextShadow {
  (...args: TextShadowArgs): PropertyTuple<"textShadow">;
  (...args: [TextShadowArgs, ...TextShadowArgs[]]): PropertyTuple<"textShadow">;
}

export const textShadow: TextShadow = (
  ...args: unknown[]
): PropertyTuple<"textShadow"> => [
  "textShadow",
  (Array.isArray(args[0])
    ? args.map(shadow => (shadow as string[]).join(" ")).join("; ")
    : args.join(" ")) as TypedCSSProperties["textShadow"],
];
