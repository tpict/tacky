import * as CSS from "csstype";
import { CSSColor } from "../color";
import { CSSImage } from "../image";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLength, CSSLengthPercentage, CSSPercentage } from "../unit";
import {
  knownUnionProperty,
  variantProperty,
  PropertyTuple,
  FourDimensionalArgs,
} from "../utils";

type BackgroundAttachmentKeyword = Exclude<
  KnownCSSValues<"backgroundAttachment">,
  CSS.Globals
>;

export interface BackgroundAttachment {
  (global: CSS.Globals): PropertyTuple<"backgroundAttachment">;
  (
    ...attachments: [
      BackgroundAttachmentKeyword,
      ...BackgroundAttachmentKeyword[]
    ]
  ): PropertyTuple<"backgroundAttachment">;
}

export const backgroundAttachment: BackgroundAttachment = (
  ...args: unknown[]
) =>
  [
    "backgroundAttachment",
    args.join(", ") as TypedCSSProperties["backgroundAttachment"],
  ] as const;

// TODO: This is just <box>
type BackgroundClipKeyword = Exclude<
  KnownCSSValues<"backgroundClip">,
  CSS.Globals
>;

export interface BackgroundClip {
  (global: CSS.Globals): PropertyTuple<"backgroundClip">;
  (...clip: [BackgroundClipKeyword, ...BackgroundClipKeyword[]]): PropertyTuple<
    "backgroundClip"
  >;
}

export const backgroundClip: BackgroundClip = (...clip: unknown[]) =>
  [
    "backgroundClip",
    clip.join(", ") as TypedCSSProperties["backgroundClip"],
  ] as const;

export const backgroundColor = variantProperty<"backgroundColor", CSSColor>(
  "backgroundColor"
);

export interface BackgroundImage {
  (global: CSS.Globals): PropertyTuple<"backgroundImage">;
  (...backgrounds: [CSSImage, ...CSSImage[]]): PropertyTuple<"backgroundImage">;
}

export const backgroundImage: BackgroundImage = (...args: unknown[]) =>
  [
    "backgroundImage",
    args.join(", ") as TypedCSSProperties["backgroundImage"],
  ] as const;

// TODO: This is just <box>
type BackgroundOriginKeyword = Exclude<
  KnownCSSValues<"backgroundOrigin">,
  CSS.Globals
>;

export interface BackgroundOrigin {
  (global: CSS.Globals): PropertyTuple<"backgroundOrigin">;
  (
    ...origin: [BackgroundOriginKeyword, ...BackgroundOriginKeyword[]]
  ): PropertyTuple<"backgroundOrigin">;
}

export const backgroundOrigin: BackgroundOrigin = (...origin: unknown[]) =>
  [
    "backgroundOrigin",
    origin.join(", ") as TypedCSSProperties["backgroundOrigin"],
  ] as const;

type BackgroundPositionKeyword = "top" | "left" | "bottom" | "right" | "center";

export type BackgroundPositionArgs<T extends string> =
  | [all: BackgroundPositionKeyword]
  | [left: CSSLengthPercentage<T>]
  | [x: "left" | "right", y: "top" | "bottom" | CSSLengthPercentage<T>]
  | [y: "top" | "bottom", x: "left" | "right" | CSSLengthPercentage<T>]
  | [x: CSSLengthPercentage<T>, y: CSSLengthPercentage<T>]
  | [
      x: "left" | "right",
      xOffset: CSSLengthPercentage<T>,
      y: "top" | "bottom",
      yOffset: CSSLengthPercentage<T>
    ];

export interface BackgroundPosition {
  (global: CSS.Globals): PropertyTuple<"backgroundPosition">;
  <T extends string>(...args: BackgroundPositionArgs<T>): PropertyTuple<
    "backgroundPosition"
  >;
  <T extends string>(...args: BackgroundPositionArgs<T>[]): PropertyTuple<
    "backgroundPosition"
  >;
}

export const backgroundPosition: BackgroundPosition = (...args: unknown[]) =>
  [
    "backgroundPosition",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as TypedCSSProperties["backgroundPosition"],
  ] as const;

type BackgroundRepeatShorthandKeyword = "repeat-x" | "repeat-y";

type BackgroundRepeatOptionKeyword = "repeat" | "space" | "round" | "no-repeat";

type BackgroundRepeatArgs =
  | [xy: BackgroundRepeatShorthandKeyword | BackgroundRepeatOptionKeyword]
  | [x: BackgroundRepeatOptionKeyword, y: BackgroundRepeatOptionKeyword];

export const backgroundRepeat = (
  ...args:
    | [global: CSS.Globals]
    | BackgroundRepeatArgs
    | [BackgroundRepeatArgs, ...BackgroundRepeatArgs[]]
): PropertyTuple<"backgroundRepeat"> =>
  [
    "backgroundRepeat",
    (Array.isArray(args[0])
      ? (args as string[][]).map(repeat => repeat.join(" ")).join(", ")
      : args.join(" ")) as TypedCSSProperties["backgroundRepeat"],
  ] as const;

type BackgroundSizeKeyword = "cover" | "contain";

type BackgroundSizeArgs<T extends string> =
  | [keyword: BackgroundSizeKeyword]
  | [width: CSSLengthPercentage<T> | "auto"]
  | [
      width: CSSLengthPercentage<T> | "auto",
      height: CSSLengthPercentage<T> | "auto"
    ];

export interface BackgroundSize {
  (global: CSS.Globals): PropertyTuple<"backgroundSize">;
  <T extends string>(...args: BackgroundSizeArgs<T>): PropertyTuple<
    "backgroundSize"
  >;
  <T extends string>(...args: BackgroundSizeArgs<T>[]): PropertyTuple<
    "backgroundSize"
  >;
}

export const backgroundSize: BackgroundSize = (...args: unknown[]) =>
  [
    "backgroundSize",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as TypedCSSProperties["backgroundSize"],
  ] as const;

type BorderStyle = TypedCSSProperties["borderTopStyle"];

export interface Border<R extends keyof TypedCSSProperties> {
  (style: BorderStyle): PropertyTuple<R>;
  (style: BorderStyle, color: CSSColor): PropertyTuple<R>;
  <T extends string>(
    width: CSSLengthPercentage<T>,
    style: BorderStyle
  ): PropertyTuple<R>;
  <T extends string>(
    width: CSSLengthPercentage<T>,
    style: BorderStyle,
    color: CSSColor
  ): PropertyTuple<R>;
}

export const border: Border<"border"> = (...args: unknown[]) =>
  ["border", args.join(" ") as TypedCSSProperties["border"]] as const;

export const borderBottom: Border<"borderBottom"> = (...args: unknown[]) =>
  [
    "borderBottom",
    args.join(" ") as TypedCSSProperties["borderBottom"],
  ] as const;

export const borderBottomColor = variantProperty<
  "borderBottomColor",
  CSSColor | "none"
>("borderBottomColor");

export const borderBottomLeftRadius = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderBottomLeftRadius"> =>
  [
    "borderBottomLeftRadius",
    width as TypedCSSProperties["borderBottomLeftRadius"],
  ] as const;

export const borderBottomRightRadius = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderBottomRightRadius"> =>
  [
    "borderBottomRightRadius",
    width as TypedCSSProperties["borderBottomRightRadius"],
  ] as const;

export const borderBottomStyle = knownUnionProperty("borderBottomStyle");

export const borderBottomWidth = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderBottomWidth"> =>
  [
    "borderBottomWidth",
    width as TypedCSSProperties["borderBottomWidth"],
  ] as const;

export const borderColor = variantProperty<"borderColor", CSSColor>(
  "borderColor"
);

export const borderImageOutset = <T extends string>(
  ...args: FourDimensionalArgs<CSSLength<T>>
) =>
  [
    "borderImageOutset",
    args.join(" ") as TypedCSSProperties["borderImageOutset"],
  ] as const;

type BorderImageRepeatKeyword = "stretch" | "repeat" | "round" | "space";

type BorderImageRepeatArgs =
  | [allSides: BorderImageRepeatKeyword]
  | [
      topAndBottom: BorderImageRepeatKeyword,
      leftAndRight: BorderImageRepeatKeyword
    ];

export const borderImageRepeat = (
  ...args: [global: CSS.Globals] | BorderImageRepeatArgs
): PropertyTuple<"borderImageRepeat"> =>
  [
    "borderImageRepeat",
    args.join(" ") as TypedCSSProperties["borderImageRepeat"],
  ] as const;

// TODO: Allow "fill" keyword at any position
export interface BorderImageSlice {
  (global: CSS.Globals): PropertyTuple<"borderImageSlice">;
  <T extends string>(
    all: number | CSSPercentage<T>,
    fill?: "fill"
  ): PropertyTuple<"borderImageSlice">;
  <T extends string>(
    vertical: number | CSSPercentage<T>,
    horizontal: number | CSSPercentage<T>,
    fill?: "fill"
  ): PropertyTuple<"borderImageSlice">;
  <T extends string>(
    top: number | CSSPercentage<T>,
    horizontal: number | CSSPercentage<T>,
    bottom: number | CSSPercentage<T>,
    fill?: "fill"
  ): PropertyTuple<"borderImageSlice">;
}

export const borderImageSlice: BorderImageSlice = (...args: unknown[]) =>
  [
    "borderImageSlice",
    args.join(" ") as TypedCSSProperties["borderImageSlice"],
  ] as const;

export const borderImageSource = variantProperty<
  "borderImageSource",
  KnownCSSValues<"borderImageSource"> | CSSImage
>("borderImageSource");

export const borderImageWidth = <T extends string>(
  ...args: FourDimensionalArgs<CSSLengthPercentage<T>>
) =>
  [
    "borderImageWidth",
    args.join(" ") as TypedCSSProperties["borderImageWidth"],
  ] as const;

export const borderLeft: Border<"borderLeft"> = (...args: unknown[]) =>
  ["borderLeft", args.join(" ") as TypedCSSProperties["borderLeft"]] as const;

export const borderLeftColor = variantProperty<
  "borderLeftColor",
  CSSColor | "none"
>("borderLeftColor");

export const borderLeftStyle = knownUnionProperty("borderLeftStyle");

export const borderLeftWidth = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderLeftWidth"> =>
  ["borderLeftWidth", width as TypedCSSProperties["borderLeftWidth"]] as const;

type BorderRadiusCorners<T extends string> =
  | [all: CSSLengthPercentage<T>]
  | [
      topLeftAndBottomRight: CSSLengthPercentage<T>,
      topRightAndBottomLeft: CSSLengthPercentage<T>
    ]
  | [
      topLeft: CSSLengthPercentage<T>,
      topRightAndBottomLeft: CSSLengthPercentage<T>,
      bottomRight: CSSLengthPercentage<T>
    ]
  | [
      topLeft: CSSLengthPercentage<T>,
      topRight: CSSLengthPercentage<T>,
      bottomRight: CSSLengthPercentage<T>,
      bottomLeft: CSSLengthPercentage<T>
    ];

export type BorderRadiusEllipticalCorners<T extends string> = [
  ...BorderRadiusCorners<T>,
  ...([] | ["/", ...BorderRadiusCorners<T>])
];

export interface BorderRadius<R> {
  (global: CSS.Globals): R;
  <T extends string>(...args: BorderRadiusEllipticalCorners<T>): R;
}

export const borderRadius: BorderRadius<PropertyTuple<"borderRadius">> = (
  ...args: unknown[]
) =>
  [
    "borderRadius",
    args.join(" ") as TypedCSSProperties["borderRadius"],
  ] as const;

export const borderRight: Border<"borderRight"> = (...args: unknown[]) =>
  ["borderRight", args.join(" ") as TypedCSSProperties["borderRight"]] as const;

export const borderRightColor = variantProperty<
  "borderRightColor",
  CSSColor | "none"
>("borderRightColor");

export const borderRightStyle = knownUnionProperty("borderRightStyle");

export const borderRightWidth = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderRightWidth"> =>
  [
    "borderRightWidth",
    width as TypedCSSProperties["borderRightWidth"],
  ] as const;

export const borderStyle = knownUnionProperty("borderStyle");

export const borderTop: Border<"borderTop"> = (...args: unknown[]) =>
  ["borderTop", args.join(" ") as TypedCSSProperties["borderTop"]] as const;

export const borderTopColor = variantProperty<
  "borderTopColor",
  CSSColor | "none"
>("borderTopColor");

export const borderTopLeftRadius = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderTopLeftRadius"> =>
  [
    "borderTopLeftRadius",
    width as TypedCSSProperties["borderTopLeftRadius"],
  ] as const;

export const borderTopRightRadius = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderTopRightRadius"> =>
  [
    "borderTopRightRadius",
    width as TypedCSSProperties["borderTopRightRadius"],
  ] as const;

export const borderTopStyle = knownUnionProperty("borderTopStyle");

export const borderTopWidth = <T extends string>(
  width: CSSLengthPercentage<T>
): PropertyTuple<"borderTopWidth"> =>
  ["borderTopWidth", width as TypedCSSProperties["borderTopWidth"]] as const;

export const borderWidth = <T extends string>(
  ...args: FourDimensionalArgs<CSSLengthPercentage<T>>
) =>
  ["borderWidth", args.join(" ") as TypedCSSProperties["borderWidth"]] as const;

export interface BoxShadow {
  <T extends string>(
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    blurRadius: CSSLengthPercentage<T>,
    spreadLength: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  <T extends string>(
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    blurRadius: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  <T extends string>(
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  <T extends string>(
    inset: "inset",
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    blurRadius: CSSLengthPercentage<T>,
    spreadLength: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  <T extends string>(
    inset: "inset",
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    blurRadius: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
  <T extends string>(
    inset: "inset",
    offsetX: CSSLengthPercentage<T>,
    offsetY: CSSLengthPercentage<T>,
    color?: CSSColor
  ): PropertyTuple<"boxShadow">;
}

export const boxShadow: BoxShadow = (...args: unknown[]) =>
  ["boxShadow", args.join(" ") as TypedCSSProperties["boxShadow"]] as const;
