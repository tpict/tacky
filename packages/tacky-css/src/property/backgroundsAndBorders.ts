import * as CSS from "csstype";
import { CSSColor } from "../color";
import { CSSImage } from "../image";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLength, CSSLengthPercentage, Percent } from "../unit";
import {
  singleArgProperty,
  PropertyTuple,
  FourDimensionalArgs,
  FourDimensionalProperty,
  FourDimensionalValue,
} from "../utils";

type BackgroundAttachmentKeyword = Exclude<
  KnownCSSValues<"backgroundAttachment">,
  CSS.Globals
>;

export type BackgroundAttachmentValue = string & {
  _tacky_id_background_attachment: never;
};

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
    args.join(", ") as BackgroundAttachmentValue,
  ] as const;

// TODO: This is just <box>
type BackgroundClipKeyword = Exclude<
  KnownCSSValues<"backgroundClip">,
  CSS.Globals
>;

export type BackgroundClipValue = string & {
  _tacky_id_background_clip: never;
};

export interface BackgroundClip {
  (global: CSS.Globals): PropertyTuple<"backgroundClip">;
  (...clip: [BackgroundClipKeyword, ...BackgroundClipKeyword[]]): PropertyTuple<
    "backgroundClip"
  >;
}

export const backgroundClip: BackgroundClip = (...clip: unknown[]) =>
  ["backgroundClip", clip.join(", ") as BackgroundClipValue] as const;

export const backgroundColor = singleArgProperty("backgroundColor");

export type BackgroundImageValue = string & {
  _tacky_id_background_image: never;
};

export interface BackgroundImage {
  (global: CSS.Globals): PropertyTuple<"backgroundImage">;
  (...backgrounds: [CSSImage, ...CSSImage[]]): PropertyTuple<"backgroundImage">;
}

export const backgroundImage: BackgroundImage = (...args: unknown[]) =>
  ["backgroundImage", args.join(", ") as BackgroundImageValue] as const;

// TODO: This is just <box>
type BackgroundOriginKeyword = Exclude<
  KnownCSSValues<"backgroundOrigin">,
  CSS.Globals
>;

export type BackgroundOriginValue = string & {
  _tacky_id_background_origin: never;
};

export interface BackgroundOrigin {
  (global: CSS.Globals): PropertyTuple<"backgroundOrigin">;
  (
    ...origin: [BackgroundOriginKeyword, ...BackgroundOriginKeyword[]]
  ): PropertyTuple<"backgroundOrigin">;
}

export const backgroundOrigin: BackgroundOrigin = (...origin: unknown[]) =>
  ["backgroundOrigin", origin.join(", ") as BackgroundOriginValue] as const;

export type BackgroundPositionValue = string & {
  _tacky_id_background_position: never;
};

type BackgroundPositionKeyword = "top" | "left" | "bottom" | "right" | "center";

export type BackgroundPositionArgs =
  | [all: BackgroundPositionKeyword]
  | [left: CSSLengthPercentage]
  | [x: "left" | "right", y: "top" | "bottom" | CSSLengthPercentage]
  | [y: "top" | "bottom", x: "left" | "right" | CSSLengthPercentage]
  | [x: CSSLengthPercentage, y: CSSLengthPercentage]
  | [
      x: "left" | "right",
      xOffset: CSSLengthPercentage,
      y: "top" | "bottom",
      yOffset: CSSLengthPercentage
    ];

export const backgroundPosition = (
  ...args:
    | [global: CSS.Globals]
    | BackgroundPositionArgs
    | [BackgroundPositionArgs, ...BackgroundPositionArgs[]]
): PropertyTuple<"backgroundPosition"> =>
  [
    "backgroundPosition",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as BackgroundPositionValue,
  ] as const;

export type BackgroundRepeatValue = string & {
  _tacky_id_background_repeat: never;
};

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
      : args.join(" ")) as BackgroundRepeatValue,
  ] as const;

export type BackgroundSizeValue = string & {
  _tacky_id_background_size: never;
};

type BackgroundSizeKeyword = "cover" | "contain";

type BackgroundSizeArgs =
  | [keyword: CSS.Globals | BackgroundSizeKeyword]
  | [width: CSSLengthPercentage | "auto"]
  | [width: CSSLengthPercentage | "auto", height: CSSLengthPercentage | "auto"];

export const backgroundSize = (
  ...args: BackgroundSizeArgs | [BackgroundSizeArgs, ...BackgroundSizeArgs[]]
): PropertyTuple<"backgroundSize"> =>
  [
    "backgroundSize",
    (Array.isArray(args[0])
      ? (args as string[][]).map(position => position.join(" ")).join(", ")
      : args.join(" ")) as BackgroundSizeValue,
  ] as const;

type BorderStyle = TypedCSSProperties["borderTopStyle"];

export type BorderValue = string & {
  _tacky_id_border_style: never;
};

export interface Border<T extends keyof TypedCSSProperties> {
  (style: BorderStyle): PropertyTuple<T>;
  (style: BorderStyle, color: CSSColor): PropertyTuple<T>;
  (width: CSSLengthPercentage, style: BorderStyle): PropertyTuple<T>;
  (
    width: CSSLengthPercentage,
    style: BorderStyle,
    color: CSSColor
  ): PropertyTuple<T>;
}

export const border: Border<"border"> = (...args: unknown[]) =>
  ["border", args.join(" ")] as PropertyTuple<"border">;

export const borderBottom: Border<"borderBottom"> = (...args: unknown[]) =>
  ["borderBottom", args.join(" ")] as PropertyTuple<"borderBottom">;

export const borderBottomColor = singleArgProperty("borderBottomColor");

export const borderBottomLeftRadius = singleArgProperty(
  "borderBottomLeftRadius"
);
export const borderBottomRightRadius = singleArgProperty(
  "borderBottomRightRadius"
);

export const borderBottomStyle = singleArgProperty("borderBottomStyle");

export const borderBottomWidth = singleArgProperty("borderBottomWidth");

export const borderColor = singleArgProperty("borderColor");

export type BorderImageOutsetValue = string & {
  _tacky_id_image_outset: never;
};

export const borderImageOutset: FourDimensionalProperty<
  PropertyTuple<"borderImageOutset">,
  CSSLength | number
> = (...args: unknown[]) =>
  ["borderImageOutset", args.join(" ") as BorderImageOutsetValue] as const;

export type BorderImageRepeatValue = string & {
  _tacky_id_border_image_repeat: never;
};

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
  ["borderImageRepeat", args.join(" ") as BorderImageRepeatValue] as const;

export type BorderImageSliceValue = string & {
  _tacky_id_border_image_slice: never;
};

// TODO: Allow "fill" keyword at any position
export type BorderImageSliceArgs =
  | [all: number | Percent, fill?: "fill"]
  | [vertical: number | Percent, horizontal: number | Percent, fill?: "fill"]
  | [
      top: number | Percent,
      horizontal: number | Percent,
      bottom: number | Percent,
      fill?: "fill"
    ];

export const borderImageSlice = (
  ...args: [global: CSS.Globals] | BorderImageSliceArgs
): PropertyTuple<"borderImageSlice"> =>
  ["borderImageSlice", args.join(" ") as BorderImageSliceValue] as const;

export const borderImageSource = singleArgProperty("borderImageSource");

export const borderImageWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderImageWidth"> =>
  ["borderImageWidth", args.join(" ") as FourDimensionalValue] as const;

export const borderLeft: Border<"borderLeft"> = (...args: unknown[]) =>
  ["borderLeft", args.join(" ")] as PropertyTuple<"borderLeft">;

export const borderLeftColor = singleArgProperty("borderLeftColor");

export const borderLeftStyle = singleArgProperty("borderLeftStyle");

export const borderLeftWidth = singleArgProperty("borderLeftWidth");

export type BorderRadiusValue = string & { _tacky_id_border_radius: never };

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

export interface BorderRadius<T> {
  (global: CSS.Globals): T;
  (...args: BorderRadiusEllipticalCorners): T;
}

export const borderRadius: BorderRadius<PropertyTuple<"borderRadius">> = (
  ...args: unknown[]
) => ["borderRadius", args.join(" ") as BorderRadiusValue] as const;

export const borderRight: Border<"borderRight"> = (...args: unknown[]) =>
  ["borderRight", args.join(" ")] as PropertyTuple<"borderRight">;

export const borderRightColor = singleArgProperty("borderRightColor");

export const borderRightStyle = singleArgProperty("borderRightStyle");

export const borderRightWidth = singleArgProperty("borderRightWidth");

export const borderStyle = singleArgProperty("borderStyle");

export const borderTop: Border<"borderTop"> = (...args: unknown[]) =>
  ["borderTop", args.join(" ")] as PropertyTuple<"borderTop">;

export const borderTopColor = singleArgProperty("borderTopColor");

export const borderTopLeftRadius = singleArgProperty("borderTopLeftRadius");

export const borderTopRightRadius = singleArgProperty("borderTopRightRadius");

export const borderTopStyle = singleArgProperty("borderTopStyle");

export const borderTopWidth = singleArgProperty("borderTopWidth");

export const borderWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderWidth"> =>
  ["borderWidth", args.join(" ") as FourDimensionalValue] as const;

export type BoxShadowValue = string & {
  _tacky_id_boxShadow: never;
};

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

export const boxShadow: BoxShadow = (
  ...args: unknown[]
): PropertyTuple<"boxShadow"> => [
  "boxShadow",
  args.join(" ") as BoxShadowValue,
];
