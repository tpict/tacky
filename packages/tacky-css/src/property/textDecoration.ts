import { CSSColor } from "../color";
import { CSSLengthPercentage } from "../unit";
import { Property, Values } from "../generated/types";

declare module "../generated/types" {
  namespace Property {
    export interface TextDecorationLine {
      (
        // TODO: Prevent duplicate keyword arguments
        ...lines: [TextDecorationLineKeyword, ...TextDecorationLineKeyword[]]
      ): PropertyTuple<"textDecorationLine">;
    }

    export interface TextShadow {
      (...shadows: [TextShadowArgs, ...TextShadowArgs[]]): PropertyTuple<
        "textShadow"
      >;
    }
  }
}

type TextDecorationLineKeyword =
  | "blink"
  | "grammar-error"
  | "line-through"
  | "overline"
  | "spelling-error"
  | "underline";

export const textDecorationLine: Property.TextDecorationLine = (
  ...args: unknown[]
) =>
  [
    "textDecorationLine",
    args.join(" ") as Values["textDecorationLine"],
  ] as const;

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

export const textShadow: Property.TextShadow = (...args: unknown[]) =>
  [
    "textShadow",
    (Array.isArray(args[0])
      ? args.map(shadow => (shadow as string[]).join(" ")).join("; ")
      : args.join(" ")) as Values["textShadow"],
  ] as const;
