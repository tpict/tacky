import * as CSS from "csstype";
import { AnimatableProperties } from "./animation";
import { CSSColor } from "./color";
import { CSSURL } from "./function";
import { CSSShape } from "./shape";
import { TypedCSSProperties, KnownCSSValues } from "./types";
import { CSSLength, CSSLengthPercentage, CSSTime, Percent } from "./unit";

type PropertyTuple<T extends keyof TypedCSSProperties> = readonly [
  T,
  TypedCSSProperties[T]
];

const singleArgProperty = <T extends keyof TypedCSSProperties>(property: T) => (
  value: TypedCSSProperties[T]
): PropertyTuple<T> => [property, value];

export const display = singleArgProperty("display");

export const color = singleArgProperty("color");
export const backgroundColor = singleArgProperty("backgroundColor");

export const lineHeight = singleArgProperty("lineHeight");
export const fontKerning = singleArgProperty("fontKerning");
export const fontOpticalSizing = singleArgProperty("fontOpticalSizing");
export const fontSizeAdjust = singleArgProperty("fontSizeAdjust");
export const fontVariantCaps = singleArgProperty("fontVariantCaps");
export const fontVariantPosition = singleArgProperty("fontVariantPosition");
export const fontWeight = singleArgProperty("fontWeight");
export const fontStretch = singleArgProperty("fontStretch");
export const fontSize = singleArgProperty("fontSize");
export const fontFamily = (
  ...fontFamilies: [string, ...string[]]
): PropertyTuple<"fontFamily"> => [
  "fontFamily",
  fontFamilies
    .map(family => (family.includes(" ") ? `"${family}"` : family))
    .join(", "),
];

export const width = singleArgProperty("width");
export const minWidth = singleArgProperty("minWidth");
export const maxWidth = singleArgProperty("maxWidth");
export const height = singleArgProperty("height");
export const minHeight = singleArgProperty("minHeight");
export const maxHeight = singleArgProperty("maxHeight");

export const top = singleArgProperty("top");
export const right = singleArgProperty("right");
export const bottom = singleArgProperty("bottom");
export const left = singleArgProperty("left");

export const marginTop = singleArgProperty("marginTop");
export const marginLeft = singleArgProperty("marginLeft");
export const marginBottom = singleArgProperty("marginBottom");
export const marginRight = singleArgProperty("marginRight");

export const paddingTop = singleArgProperty("paddingTop");
export const paddingLeft = singleArgProperty("paddingLeft");
export const paddingBottom = singleArgProperty("paddingBottom");
export const paddingRight = singleArgProperty("paddingRight");

export type FourDimensionalArgs =
  | [all: CSSLengthPercentage]
  | [vertical: CSSLengthPercentage, horizontal: CSSLengthPercentage]
  | [
      top: CSSLengthPercentage,
      right: CSSLengthPercentage,
      bottom: CSSLengthPercentage
    ]
  | [
      top: CSSLengthPercentage,
      right: CSSLengthPercentage,
      bottom: CSSLengthPercentage,
      left: CSSLengthPercentage
    ];

export type FourDimensionalValue = string & {
  _tacky_id_four_d: never;
};

export const margin = (...args: FourDimensionalArgs): PropertyTuple<"margin"> =>
  ["margin", args.join(" ") as FourDimensionalValue] as const;

export const padding = (
  ...args: FourDimensionalArgs
): PropertyTuple<"padding"> =>
  ["padding", args.join(" ") as FourDimensionalValue] as const;

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

export type FlexValue = string & {
  _tacky_id_flex: never;
};
type FlexBasis = TypedCSSProperties["flexBasis"];
type FlexGrow = TypedCSSProperties["flexGrow"];
type FlexShrink = TypedCSSProperties["flexGrow"];
export interface Flex {
  (grow: FlexGrow): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink): PropertyTuple<"flex">;
  (grow: FlexGrow, basis: FlexBasis): PropertyTuple<"flex">;
  (grow: FlexGrow, shrink: FlexShrink, basis: FlexBasis): PropertyTuple<"flex">;
}
export const flex: Flex = (...args: unknown[]): PropertyTuple<"flex"> => [
  "flex",
  args.join(" ") as FlexValue,
];
export type FlexFlowValue = string & { _tacky_id_flex_flow: never };
type FlexDirection = Exclude<CSS.Property.FlexDirection, CSS.Globals>;
type FlexWrap = Exclude<CSS.Property.FlexWrap, CSS.Globals>;
export interface FlexFlow {
  (global: CSS.Globals): PropertyTuple<"flexFlow">;
  (direction: FlexDirection): PropertyTuple<"flexFlow">;
  (wrap: FlexWrap): PropertyTuple<"flexFlow">;
  (direction: FlexDirection, wrap: FlexWrap): PropertyTuple<"flexFlow">;
}
export const flexFlow: FlexFlow = (...args: unknown[]) =>
  ["flexFlow", args.join(" ") as FlexFlowValue] as const;
export const flexBasis = singleArgProperty("flexBasis");
export const flexGrow = singleArgProperty("flexGrow");
export const flexShrink = singleArgProperty("flexShrink");

export const alignContent = singleArgProperty("alignContent");
export const alignItems = singleArgProperty("alignItems");
export const alignSelf = singleArgProperty("alignSelf");
export const justifyContent = singleArgProperty("justifyContent");
export const justifyItems = singleArgProperty("justifyItems");
export const justifySelf = singleArgProperty("justifySelf");

export const borderColor = singleArgProperty("borderColor");
export const borderStyle = singleArgProperty("borderStyle");
export const borderTopStyle = singleArgProperty("borderTopStyle");
export const borderRightStyle = singleArgProperty("borderRightStyle");
export const borderBottomStyle = singleArgProperty("borderBottomStyle");
export const borderLeftStyle = singleArgProperty("borderLeftStyle");
export const borderImageSource = singleArgProperty("borderImageSource");
export const borderImageWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderImageWidth"> =>
  ["borderImageWidth", args.join(" ") as FourDimensionalValue] as const;

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
export const borderTop: Border<"borderTop"> = (...args: unknown[]) =>
  ["borderTop", args.join(" ")] as PropertyTuple<"borderTop">;
export const borderRight: Border<"borderRight"> = (...args: unknown[]) =>
  ["borderRight", args.join(" ")] as PropertyTuple<"borderRight">;
export const borderBottom: Border<"borderBottom"> = (...args: unknown[]) =>
  ["borderBottom", args.join(" ")] as PropertyTuple<"borderBottom">;
export const borderLeft: Border<"borderLeft"> = (...args: unknown[]) =>
  ["borderLeft", args.join(" ")] as PropertyTuple<"borderLeft">;

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

export const borderTopColor = singleArgProperty("borderTopColor");
export const borderLeftColor = singleArgProperty("borderLeftColor");
export const borderBottomColor = singleArgProperty("borderBottomColor");
export const borderRightColor = singleArgProperty("borderRightColor");
export const borderTopWidth = singleArgProperty("borderTopWidth");
export const borderLeftWidth = singleArgProperty("borderLeftWidth");
export const borderBottomWidth = singleArgProperty("borderBottomWidth");
export const borderRightWidth = singleArgProperty("borderRightWidth");
export const borderWidth = (
  ...args: FourDimensionalArgs
): PropertyTuple<"borderWidth"> =>
  ["borderWidth", args.join(" ") as FourDimensionalValue] as const;
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
export const borderTopLeftRadius = singleArgProperty("borderTopLeftRadius");
export const borderTopRightRadius = singleArgProperty("borderTopRightRadius");
export const borderBottomLeftRadius = singleArgProperty(
  "borderBottomLeftRadius"
);
export const borderBottomRightRadius = singleArgProperty(
  "borderBottomRightRadius"
);
export type BorderSliceValue = string & { _tacky_id_border_slice: never };
export interface BorderSlice {
  (global: CSS.Globals): PropertyTuple<"borderSlice">;
  (all: number | Percent, fill?: "fill"): PropertyTuple<"borderSlice">;
  (
    vertical: number | Percent,
    horizontal: number | Percent,
    fill?: "fill"
  ): PropertyTuple<"borderSlice">;
  (
    top: number | Percent,
    horizontal: number | Percent,
    bottom: number | Percent,
    fill?: "fill"
  ): PropertyTuple<"borderSlice">;
}
export const borderSlice: BorderSlice = (...args: unknown[]) =>
  ["borderSlice", args.join(" ") as BorderSliceValue] as const;

type BackgroundAttachment = Exclude<
  KnownCSSValues<"backgroundAttachment">,
  CSS.Globals
>;
export type BackgroundAttachmentValue = string & {
  _tacky_id_background_attachment: never;
};
export const backgroundAttachment = (
  ...attachment:
    | [CSS.Globals]
    | [BackgroundAttachment, ...BackgroundAttachment[]]
): PropertyTuple<"backgroundAttachment"> => [
  "backgroundAttachment",
  attachment.join(", ") as BackgroundAttachmentValue,
];

type BackgroundBlendMode = Exclude<
  KnownCSSValues<"backgroundBlendMode">,
  CSS.Globals
>;
export type BackgroundBlendModeValue = string & {
  _tacky_id_background_blend_mode: never;
};
export const backgroundBlendMode = (
  ...attachment: [CSS.Globals] | [BackgroundBlendMode, ...BackgroundBlendMode[]]
): PropertyTuple<"backgroundBlendMode"> => [
  "backgroundBlendMode",
  attachment.join(", ") as BackgroundBlendModeValue,
];

type BackgroundClip = Exclude<KnownCSSValues<"backgroundClip">, CSS.Globals>;
export type BackgroundClipValue = string & {
  _tacky_id_background_clip: never;
};
export const backgroundClip = (
  ...attachment: [CSS.Globals] | [BackgroundClip, ...BackgroundClip[]]
): PropertyTuple<"backgroundClip"> => [
  "backgroundClip",
  attachment.join(", ") as BackgroundClipValue,
];

type BackgroundOrigin = Exclude<
  KnownCSSValues<"backgroundOrigin">,
  CSS.Globals
>;
export type BackgroundOriginValue = string & {
  _tacky_id_background_origin: never;
};
export const backgroundOrigin = (
  ...attachment: [CSS.Globals] | [BackgroundOrigin, ...BackgroundOrigin[]]
): PropertyTuple<"backgroundOrigin"> => [
  "backgroundOrigin",
  attachment.join(", ") as BackgroundOriginValue,
];

type QuotesPair = [open: string, close: string];
export type QuotesValue = string & { _tacky_id_quotes: never };
export const quotes = (...args: QuotesPair[]): PropertyTuple<"quotes"> => [
  "quotes",
  args
    .flat()
    .map(c => `"${c}"`)
    .join(" ") as QuotesValue,
];

export type TranslateValue = string & { _tacky_id_translate: never };
export interface Translate {
  (keyword: CSS.Globals | "none"): PropertyTuple<"translate">;
  (xy: CSSLengthPercentage): PropertyTuple<"translate">;
  (x: CSSLengthPercentage, y: CSSLengthPercentage): PropertyTuple<"translate">;
  (x: CSSLengthPercentage, y: CSSLengthPercentage): PropertyTuple<"translate">;
  (x: CSSLengthPercentage, y: CSSLengthPercentage, z: CSSLength): PropertyTuple<
    "translate"
  >;
}
export const translate: Translate = (...args: unknown[]) =>
  ["translate", args.join(" ") as TranslateValue] as const;

type OverflowKeyword = Exclude<KnownCSSValues<"overflow">, CSS.Globals>;
export type OverflowValue = string & { _tacky_id_overflow: never };
export interface Overflow {
  (xy: OverflowKeyword | CSS.Globals): PropertyTuple<"overflow">;
  (x: OverflowKeyword, y: OverflowKeyword): PropertyTuple<"overflow">;
}
export const overflow: Overflow = (...args: unknown[]) =>
  ["overflow", args.join(" ") as OverflowValue] as const;

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
  ...args: BackgroundRepeatArgs
): PropertyTuple<"backgroundRepeat"> =>
  ["backgroundRepeat", args.join(" ") as BackgroundRepeatValue] as const;

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

export type TransitionPropertyValue = string & {
  _tacky_id_transition_property: never;
};
export const transitionProperty = (
  ...args:
    | [keyword: CSS.Globals | "all" | "none"]
    | [...properties: [AnimatableProperties, ...AnimatableProperties[]]]
): PropertyTuple<"transitionProperty"> =>
  ["transitionProperty", args.join(", ") as TransitionPropertyValue] as const;

export type TransitionDurationValue = string & {
  _tacky_id_transition_duration: never;
};
export const transitionDuration = (
  ...args: [keyword: CSS.Globals] | [...duration: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDuration"> =>
  ["transitionDuration", args.join(", ") as TransitionDurationValue] as const;

export type TransitionDelayValue = string & {
  _tacky_id_transition_delay: never;
};
export const transitionDelay = (
  ...args: [keyword: CSS.Globals] | [...delay: [CSSTime, ...CSSTime[]]]
): PropertyTuple<"transitionDelay"> =>
  ["transitionDelay", args.join(", ") as TransitionDelayValue] as const;

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

// TODO: MDN defines a <geometry-box> value which only seems to work in Firefox
export type ClipPathValue = string & { _tacky_id_clip_path: never };
export interface ClipPath {
  (global: CSS.Globals): PropertyTuple<"clipPath">;
  (clipSource: CSSURL): PropertyTuple<"clipPath">;
  (basicShape: CSSShape): PropertyTuple<"clipPath">;
}
export const clipPath: ClipPath = (value: unknown) =>
  ["clipPath", value as ClipPathValue] as const;

// TODO: Prevent duplicate keyword arguments
export type ContainValue = string & { _tacky_id_contain: never };
type ContainUnaryKeyword = "none" | "strict" | "content";
type ContainMultipleKeyword = "size" | "layout" | "style" | "paint";
export interface Contain {
  (global: CSS.Globals): PropertyTuple<"contain">;
  (keyword: ContainUnaryKeyword | ContainMultipleKeyword): PropertyTuple<
    "contain"
  >;
  (...keywords: ContainMultipleKeyword[]): PropertyTuple<"contain">;
}
export const contain: Contain = (...args: unknown[]) =>
  ["contain", args.join(" ") as ContainValue] as const;

export const all = singleArgProperty("all");
export const animationDelay = singleArgProperty("animationDelay");
export const animationDirection = singleArgProperty("animationDirection");
export const animationDuration = singleArgProperty("animationDuration");
export const animationFillMode = singleArgProperty("animationFillMode");
export const animationIterationCount = singleArgProperty(
  "animationIterationCount"
);
export const animationPlayState = singleArgProperty("animationPlayState");
export const backfaceVisibility = singleArgProperty("backfaceVisibility");
export const blockSize = singleArgProperty("blockSize");
export const borderCollapse = singleArgProperty("borderCollapse");
export const boxDecorationBreak = singleArgProperty("boxDecorationBreak");
export const boxSizing = singleArgProperty("boxSizing");
export const breakAfter = singleArgProperty("breakAfter");
export const breakBefore = singleArgProperty("breakBefore");
export const breakInside = singleArgProperty("breakInside");
export const captionSide = singleArgProperty("captionSide");
export const caretColor = singleArgProperty("caretColor");
export const clear = singleArgProperty("clear");
export const colorAdjust = singleArgProperty("colorAdjust");
export const columnCount = singleArgProperty("columnCount");
export const columnFill = singleArgProperty("columnFill");
export const columnSpan = singleArgProperty("columnSpan");
export const cursor = singleArgProperty("cursor");
export const direction = singleArgProperty("direction");
export const emptyCells = singleArgProperty("emptyCells");
export const flexDirection = singleArgProperty("flexDirection");
export const flexWrap = singleArgProperty("flexWrap");
export const float = singleArgProperty("float");
export const gridRowGap = singleArgProperty("gridRowGap");
export const letterSpacing = singleArgProperty("letterSpacing");
export const hyphens = singleArgProperty("hyphens");
export const imageRendering = singleArgProperty("imageRendering");
export const inlineSize = singleArgProperty("inlineSize");
export const isolation = singleArgProperty("isolation");
export const maskType = singleArgProperty("maskType");
export const mixBlendMode = singleArgProperty("mixBlendMode");
export const lineBreak = singleArgProperty("lineBreak");
export const listStylePosition = singleArgProperty("listStylePosition");
export const objectFit = singleArgProperty("objectFit");
export const opacity = singleArgProperty("opacity");
export const order = singleArgProperty("order");
export const orphans = singleArgProperty("orphans");
export const outlineColor = singleArgProperty("outlineColor");
export const outlineStyle = singleArgProperty("outlineStyle");
export const outlineWidth = singleArgProperty("outlineWidth");
export const overflowAnchor = singleArgProperty("overflowAnchor");
export const overflowWrap = singleArgProperty("overflowWrap");
export const overflowX = singleArgProperty("overflowX");
export const overflowY = singleArgProperty("overflowY");
export const overscrollBehaviorBlock = singleArgProperty(
  "overscrollBehaviorBlock"
);
export const overscrollBehaviorInline = singleArgProperty(
  "overscrollBehaviorInline"
);
export const overscrollBehaviorX = singleArgProperty("overscrollBehaviorX");
export const overscrollBehaviorY = singleArgProperty("overscrollBehaviorY");
export const pageBreakAfter = singleArgProperty("pageBreakAfter");
export const pageBreakBefore = singleArgProperty("pageBreakBefore");
export const pageBreakInside = singleArgProperty("pageBreakInside");
export const pointerEvents = singleArgProperty("pointerEvents");
export const position = singleArgProperty("position");
export const resize = singleArgProperty("resize");
export const rowGap = singleArgProperty("rowGap");
export const scrollBehavior = singleArgProperty("scrollBehavior");
export const tableLayout = singleArgProperty("tableLayout");
export const tabSize = singleArgProperty("tabSize");
export const textAlign = singleArgProperty("textAlign");
export const textAlignLast = singleArgProperty("textAlignLast");
export const textCombineUpright = singleArgProperty("textCombineUpright");
export const textDecorationColor = singleArgProperty("textDecorationColor");
export const textDecorationThickness = singleArgProperty(
  "textDecorationThickness"
);
export const textDecorationSkipInk = singleArgProperty("textDecorationSkipInk");
export const textDecorationStyle = singleArgProperty("textDecorationStyle");
export const textJustify = singleArgProperty("textJustify");
export const textOrientation = singleArgProperty("textOrientation");
export const textOverflow = singleArgProperty("textOverflow");
export const textRendering = singleArgProperty("textRendering");
export const textTransform = singleArgProperty("textTransform");
export const userSelect = singleArgProperty("userSelect");
export const verticalAlign = singleArgProperty("verticalAlign");
export const visibility = singleArgProperty("visibility");
export const whiteSpace = singleArgProperty("whiteSpace");
export const widows = singleArgProperty("widows");
export const wordBreak = singleArgProperty("wordBreak");
export const wordSpacing = singleArgProperty("wordSpacing");
export const wordWrap = singleArgProperty("wordWrap");
export const writingMode = singleArgProperty("writingMode");
export const zIndex = singleArgProperty("zIndex");
export const zoom = singleArgProperty("zoom");
