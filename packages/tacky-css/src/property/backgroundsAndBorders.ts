import * as CSS from "csstype";
import { CSSColor } from "../color";
import { CSSImage } from "../image";
import { KnownCSSValues, TypedCSSProperties } from "../types";
import { CSSLength, CSSLengthPercentage, Percent } from "../unit";
import {
  knownUnionProperty,
  variantProperty,
  PropertyTuple,
  FourDimensionalArgs,
  FourDimensionalProperty,
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
      : args.join(" ")) as TypedCSSProperties["backgroundSize"],
  ] as const;

type BorderStyle = TypedCSSProperties["borderTopStyle"];

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

export const borderBottomLeftRadius = variantProperty<
  "borderBottomLeftRadius",
  CSSLengthPercentage
>("borderBottomLeftRadius");

export const borderBottomRightRadius = variantProperty<
  "borderBottomRightRadius",
  CSSLengthPercentage
>("borderBottomRightRadius");

export const borderBottomStyle = knownUnionProperty("borderBottomStyle");

export const borderBottomWidth = variantProperty<
  "borderBottomWidth",
  CSSLengthPercentage
>("borderBottomWidth");

export const borderColor = variantProperty<"borderColor", CSSColor>(
  "borderColor"
);

export const borderImageOutset: FourDimensionalProperty<
  PropertyTuple<"borderImageOutset">,
  CSSLength | number
> = (...args: unknown[]) =>
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
  [
    "borderImageSlice",
    args.join(" ") as TypedCSSProperties["borderImageSlice"],
  ] as const;

export const borderImageSource = variantProperty<
  "borderImageSource",
  KnownCSSValues<"borderImageSource"> | CSSImage
>("borderImageSource");

export const borderImageWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderImageWidth"> =>
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

export const borderLeftWidth = variantProperty<
  "borderLeftWidth",
  CSSLengthPercentage
>("borderLeftWidth");

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

export const borderRightWidth = variantProperty<
  "borderRightWidth",
  CSSLengthPercentage
>("borderRightWidth");

export const borderStyle = knownUnionProperty("borderStyle");

export const borderTop: Border<"borderTop"> = (...args: unknown[]) =>
  ["borderTop", args.join(" ") as TypedCSSProperties["borderTop"]] as const;

export const borderTopColor = variantProperty<
  "borderTopColor",
  CSSColor | "none"
>("borderTopColor");

export const borderTopLeftRadius = variantProperty<
  "borderTopLeftRadius",
  CSSLengthPercentage
>("borderTopLeftRadius");

export const borderTopRightRadius = variantProperty<
  "borderTopRightRadius",
  CSSLengthPercentage
>("borderTopRightRadius");

export const borderTopStyle = knownUnionProperty("borderTopStyle");

export const borderTopWidth = variantProperty<
  "borderTopWidth",
  CSSLengthPercentage
>("borderTopWidth");

export const borderWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderWidth"> =>
  ["borderWidth", args.join(" ") as TypedCSSProperties["borderWidth"]] as const;

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
  args.join(" ") as TypedCSSProperties["boxShadow"],
];
