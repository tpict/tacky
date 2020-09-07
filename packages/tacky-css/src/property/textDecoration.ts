import * as CSS from "csstype";
import { CSSColor } from "../color";
import { CSSLengthPercentage } from "../unit";
import { singleArgProperty, PropertyTuple } from "../utils";

export const textDecorationColor = singleArgProperty("textDecorationColor");

// TODO: Prevent duplicate keyword arguments
export type TextDecorationLineValue = string & {
  _tacky_id_text_decoration_line_value: never;
};

type TextDecorationLineKeyword = "underline" | "overline" | "line-through";

export const textDecorationLineValue = (
  ...args:
    | [keyword: CSS.Globals | "none"]
    | [...lines: [TextDecorationLineKeyword, ...TextDecorationLineKeyword[]]]
): PropertyTuple<"textDecorationLine"> =>
  ["textDecorationLine", args.join(" ") as TextDecorationLineValue] as const;

export const textDecorationSkipInk = singleArgProperty("textDecorationSkipInk");

export const textDecorationStyle = singleArgProperty("textDecorationStyle");

export const textDecorationThickness = singleArgProperty(
  "textDecorationThickness"
);

export type TextShadowValue = string & { _tacky_id_text_shadow: never };

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
    : args.join(" ")) as TextShadowValue,
];
