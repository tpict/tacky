// TODO: Elliptical radii
import * as CSS from "csstype";
import { CSSColor } from "../color";
import { CSSImage } from "../image";
import { KnownCSSValues } from "../types";
import { CSSLength, CSSLengthPercentage, Percent } from "../unit";
import { FourDimensionalArgs, FourDimensionalProperty } from "../utils";
import { Property, Values, PropertyTuple } from "../generated/types";

type BackgroundAttachmentKeyword = Exclude<
  KnownCSSValues<"backgroundAttachment">,
  CSS.Globals
>;

export interface GenericBorder<T extends keyof Values> {
  (style: BorderStyleValue): PropertyTuple<T>;
  (style: BorderStyleValue, color: CSSColor): PropertyTuple<T>;
  (width: CSSLengthPercentage, style: BorderStyleValue): PropertyTuple<T>;
  (
    width: CSSLengthPercentage,
    style: BorderStyleValue,
    color: CSSColor
  ): PropertyTuple<T>;
}

declare module "../generated/types" {
  namespace Property {
    export interface BackgroundAttachment {
      (
        ...attachments: [
          BackgroundAttachmentKeyword,
          ...BackgroundAttachmentKeyword[]
        ]
      ): PropertyTuple<"backgroundAttachment">;
    }

    export interface BackgroundClip {
      (
        ...clip: [BackgroundClipKeyword, ...BackgroundClipKeyword[]]
      ): PropertyTuple<"backgroundClip">;
    }

    export interface BackgroundImage {
      (...backgrounds: [CSSImage, ...CSSImage[]]): PropertyTuple<
        "backgroundImage"
      >;
    }

    export interface BackgroundOrigin {
      (
        ...origin: [BackgroundOriginKeyword, ...BackgroundOriginKeyword[]]
      ): PropertyTuple<"backgroundOrigin">;
    }

    export interface BackgroundPosition {
      (
        ...args: [
          PartialBackgroundPositionArgs,
          PartialBackgroundPositionArgs[]
        ]
      ): PropertyTuple<"backgroundPosition">;
    }

    export interface BackgroundRepeat {
      (
        x: BackgroundRepeatOptionKeyword,
        y: BackgroundRepeatOptionKeyword
      ): PropertyTuple<"backgroundRepeat">;
    }

    export interface BackgroundSize {
      (
        width: CSSLengthPercentage | "auto",
        height: CSSLengthPercentage | "auto"
      ): PropertyTuple<"backgroundSize">;
    }

    export interface Border extends GenericBorder<"border"> {}

    export interface BorderBottom extends GenericBorder<"borderBottom"> {}

    export interface BorderColor {
      (...args: FourDimensionalArgs<CSSColor>): PropertyTuple<"borderColor">;
    }

    export interface BorderImageOutset {
      (...args: FourDimensionalArgs<CSSLength | number>): PropertyTuple<
        "borderImageOutset"
      >;
    }

    export interface BorderImageRepeat {
      (
        topAndBottom: BorderImageRepeatKeyword,
        leftAndRight: BorderImageRepeatKeyword
      ): PropertyTuple<"borderImageRepeat">;
    }

    // TODO: Allow "fill" keyword at any position
    export interface BorderImageSlice {
      (all: number | Percent, fill?: "fill"): PropertyTuple<"borderImageSlice">;
      (
        vertical: number | Percent,
        horizontal: number | Percent,
        fill?: "fill"
      ): PropertyTuple<"borderImageSlice">;
      (
        top: number | Percent,
        horizontal: number | Percent,
        bottom: number | Percent,
        fill?: "fill"
      ): PropertyTuple<"borderImageSlice">;
      (
        top: number | Percent,
        left: number | Percent,
        bottom: number | Percent,
        right: number | Percent,
        fill?: "fill"
      ): PropertyTuple<"borderImageSlice">;
    }

    export interface BorderImageWidth
      extends FourDimensionalProperty<
        PropertyTuple<"borderImageWidth">,
        CSSLengthPercentage
      > {}

    export interface BorderLeft extends GenericBorder<"borderLeft"> {}

    export interface BorderRadius {
      (...args: BorderRadiusEllipticalCorners): PropertyTuple<"borderRadius">;
    }

    export interface BorderRight extends GenericBorder<"borderRight"> {}

    export interface BorderStyle {
      (...styles: [BorderStyleValue, ...BorderStyleValue[]]): PropertyTuple<
        "borderStyle"
      >;
    }

    export interface BorderTop extends GenericBorder<"borderTop"> {}

    export interface BorderWidth {
      (...args: FourDimensionalArgs): PropertyTuple<"borderWidth">;
    }

    export interface BoxShadow {
      (
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        blurRadius: CSSLengthPercentage,
        spreadLength: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
      (
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        blurRadius: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
      (
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
      (
        inset: "inset",
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        blurRadius: CSSLengthPercentage,
        spreadLength: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
      (
        inset: "inset",
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        blurRadius: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
      (
        inset: "inset",
        offsetX: CSSLengthPercentage,
        offsetY: CSSLengthPercentage,
        color?: CSSColor
      ): PropertyTuple<"boxShadow">;
    }
  }
}

export const backgroundAttachment: Property.BackgroundAttachment = (
  ...args: unknown[]
) =>
  [
    "backgroundAttachment",
    args.join(", ") as Values["backgroundAttachment"],
  ] as const;

// TODO: This is just <box>
type BackgroundClipKeyword = Exclude<
  KnownCSSValues<"backgroundClip">,
  CSS.Globals
>;

export const backgroundClip: Property.BackgroundClip = (...clip: unknown[]) =>
  ["backgroundClip", clip.join(", ") as Values["backgroundClip"]] as const;

export const backgroundImage: Property.BackgroundImage = (...args: unknown[]) =>
  ["backgroundImage", args.join(", ") as Values["backgroundImage"]] as const;

// TODO: This is just <box>
type BackgroundOriginKeyword = Exclude<
  KnownCSSValues<"backgroundOrigin">,
  CSS.Globals
>;

export const backgroundOrigin: Property.BackgroundOrigin = (
  ...origin: unknown[]
) =>
  [
    "backgroundOrigin",
    origin.join(", ") as Values["backgroundOrigin"],
  ] as const;

type BackgroundPositionKeyword = "top" | "left" | "bottom" | "right" | "center";

type PartialBackgroundPositionArgs =
  | [x: "left" | "right", y: "top" | "bottom" | CSSLengthPercentage]
  | [y: "top" | "bottom", x: "left" | "right" | CSSLengthPercentage]
  | [x: CSSLengthPercentage, y: CSSLengthPercentage]
  | [
      x: "left" | "right",
      xOffset: CSSLengthPercentage,
      y: "top" | "bottom",
      yOffset: CSSLengthPercentage
    ];

export type BackgroundPositionArgs =
  | [all: BackgroundPositionKeyword]
  | [left: CSSLengthPercentage]
  | PartialBackgroundPositionArgs;

export const backgroundPosition: Property.BackgroundPosition = (
  ...args: unknown[]
) =>
  [
    "backgroundPosition",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as Values["backgroundPosition"],
  ] as const;

type BackgroundRepeatOptionKeyword = "repeat" | "space" | "round" | "no-repeat";

export const backgroundRepeat: Property.BackgroundRepeat = (
  ...args: unknown[]
) =>
  [
    "backgroundRepeat",
    (Array.isArray(args[0])
      ? (args as string[][]).map(repeat => repeat.join(" ")).join(", ")
      : args.join(" ")) as Values["backgroundRepeat"],
  ] as const;

export const backgroundSize: Property.BackgroundSize = (...args: unknown[]) =>
  [
    "backgroundSize",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as Values["backgroundSize"],
  ] as const;

type BorderStyleValue = Exclude<KnownCSSValues<"borderTopStyle">, CSS.Globals>;

export const border: Property.Border = (...args: unknown[]) =>
  ["border", args.join(" ") as Values["border"]] as const;

export const borderBottom: Property.BorderBottom = (...args: unknown[]) =>
  ["borderBottom", args.join(" ") as Values["borderBottom"]] as const;

export const borderBottomLeftRadius: Property.BorderBottomLeftRadius = (
  arg: unknown
) =>
  ["borderBottomLeftRadius", arg as Values["borderBottomLeftRadius"]] as const;

export const borderBottomRightRadius: Property.BorderBottomRightRadius = (
  arg: unknown
) =>
  [
    "borderBottomRightRadius",
    arg as Values["borderBottomRightRadius"],
  ] as const;

export const borderColor: Property.BorderColor = (...args: unknown[]) =>
  ["borderColor", args.join(" ") as Values["borderColor"]] as const;

export const borderImageOutset: Property.BorderImageOutset = (
  ...args: unknown[]
) =>
  ["borderImageOutset", args.join(" ") as Values["borderImageOutset"]] as const;

type BorderImageRepeatKeyword = "stretch" | "repeat" | "round" | "space";

export const borderImageRepeat: Property.BorderImageRepeat = (
  ...args: unknown[]
) =>
  ["borderImageRepeat", args.join(" ") as Values["borderImageRepeat"]] as const;

export const borderImageSlice: Property.BorderImageSlice = (
  ...args: unknown[]
) =>
  ["borderImageSlice", args.join(" ") as Values["borderImageSlice"]] as const;

export const borderImageWidth: Property.BorderImageWidth = (
  ...args: unknown[]
) =>
  ["borderImageWidth", args.join(" ") as Values["borderImageWidth"]] as const;

export const borderLeft: Property.BorderLeft = (...args: unknown[]) =>
  ["borderLeft", args.join(" ") as Values["borderLeft"]] as const;

type BorderRadiusCorners =
  | [all: CSSLengthPercentage]
  | [
      topLeftAndBottomRight: CSSLengthPercentage,
      topRightAndBottomLeft: CSSLengthPercentage
    ]
  | [
      topLeft: CSSLengthPercentage,
      topRightAndBottomLeft: CSSLengthPercentage,
      bottomRight: CSSLengthPercentage
    ]
  | [
      topLeft: CSSLengthPercentage,
      topRight: CSSLengthPercentage,
      bottomRight: CSSLengthPercentage,
      bottomLeft: CSSLengthPercentage
    ];

export type BorderRadiusEllipticalCorners = [
  ...BorderRadiusCorners,
  ...([] | ["/", ...BorderRadiusCorners])
];

export const borderRadius: Property.BorderRadius = (...args: unknown[]) =>
  ["borderRadius", args.join(" ") as Values["borderRadius"]] as const;

export const borderRight: Property.BorderRight = (...args: unknown[]) =>
  ["borderRight", args.join(" ") as Values["borderRight"]] as const;

export const borderStyle: Property.BorderStyle = (...args: unknown[]) =>
  ["borderStyle", args.join(" ") as Values["borderStyle"]] as const;

export const borderTop: Property.BorderTop = (...args: unknown[]) =>
  ["borderTop", args.join(" ") as Values["borderTop"]] as const;

export const borderTopLeftRadius: Property.BorderTopLeftRadius = (
  arg: unknown
) => ["borderTopLeftRadius", arg as Values["borderTopLeftRadius"]] as const;

export const borderTopRightRadius: Property.BorderTopRightRadius = (
  arg: unknown
) => ["borderTopRightRadius", arg as Values["borderTopRightRadius"]] as const;

export const borderWidth: Property.BorderWidth = (...args: unknown[]) =>
  ["borderWidth", args.join(" ") as Values["borderWidth"]] as const;

export const boxShadow: Property.BoxShadow = (...args: unknown[]) =>
  ["boxShadow", args.join(" ") as Values["boxShadow"]] as const;
