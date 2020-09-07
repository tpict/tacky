import * as CSS from "csstype";

import { CSSColor } from "./color";
import { FitContent } from "./function";
import { CSSImage } from "./image";
import {
  BackgroundAttachmentValue,
  BackgroundBlendModeValue,
  BackgroundClipValue,
  BackgroundOriginValue,
  BackgroundPositionValue,
  BackgroundRepeatValue,
  BackgroundSizeValue,
  BorderImageSliceValue,
  BorderRadiusValue,
  BorderValue,
  BoxShadowValue,
  ClipPathValue,
  ContainValue,
  FlexValue,
  FlexFlowValue,
  QuotesValue,
  OverflowValue,
  TextDecorationLineValue,
  TextShadowValue,
  TransitionDelayValue,
  TransitionDurationValue,
  TransitionPropertyValue,
} from "./property";
import { FourDimensionalValue } from "./utils";
import { CSSLength, CSSLengthPercentage, CSSTime } from "./unit";

// These properties can be safely expressed without custom interfaces
type PrimitiveUnionProperties = Required<
  Pick<
    CSS.Properties,
    | "all"
    | "backfaceVisibility"
    | "borderBottomStyle"
    | "borderCollapse"
    | "borderLeftStyle"
    | "borderRightStyle"
    | "borderStyle"
    | "borderTopStyle"
    | "boxDecorationBreak"
    | "boxSizing"
    | "breakAfter"
    | "breakBefore"
    | "breakInside"
    | "captionSide"
    | "clear"
    | "colorAdjust"
    | "columnCount"
    | "columnFill"
    | "columnSpan"
    | "cursor"
    | "direction"
    | "display"
    | "emptyCells"
    | "flexBasis"
    | "flexDirection"
    | "flexGrow"
    | "flexShrink"
    | "flexWrap"
    | "float"
    | "fontKerning"
    | "fontOpticalSizing"
    | "fontSizeAdjust"
    | "fontVariantCaps"
    | "fontVariantPosition"
    | "fontWeight"
    | "hyphens"
    | "imageRendering"
    | "isolation"
    | "lineBreak"
    | "listStylePosition"
    | "maskType"
    | "mixBlendMode"
    | "objectFit"
    | "order"
    | "orphans"
    | "overflowAnchor"
    | "overflowWrap"
    | "overflowX"
    | "overflowY"
    | "overscrollBehaviorBlock"
    | "overscrollBehaviorInline"
    | "overscrollBehaviorX"
    | "overscrollBehaviorY"
    | "pageBreakAfter"
    | "pageBreakBefore"
    | "pageBreakInside"
    | "pointerEvents"
    | "position"
    | "resize"
    | "scrollBehavior"
    | "tableLayout"
    | "textAlign"
    | "textAlignLast"
    | "textDecorationSkipInk"
    | "textDecorationStyle"
    | "textJustify"
    | "textOrientation"
    | "textRendering"
    | "textTransform"
    | "userSelect"
    | "visibility"
    | "whiteSpace"
    | "widows"
    | "wordBreak"
    | "wordWrap"
    | "writingMode"
    | "zIndex"
  >
>;

export type KnownCSSValues<
  T extends keyof CSS.Properties<never>,
  U extends CSS.Properties[T] = CSS.Properties[T]
> = U extends string | number | symbol
  ? {
      [K in U]: string extends K ? never : number extends K ? never : K;
    } extends { [_ in U]: infer U }
    ? // eslint-disable-next-line @typescript-eslint/ban-types
      {} extends U
      ? never
      : U
    : never
  : never;

// These properties are typed as a union containing a member that would
// preclude maximal type safety e.g. string & {}
type UnionOfStringProperties = {
  [P in
    | "alignContent"
    | "alignItems"
    | "alignSelf"
    | "justifyContent"
    | "justifyItems"
    | "justifySelf"
    | "outlineStyle"

    // "Digits" syntax has minimal support
    | "textCombineUpright"

    // Non-keyword syntaxes have minimal support
    | "textOverflow"

    // TODO: Multiple animations
    | "animationDirection"
    | "animationFillMode"
    | "animationPlayState"

    // Level 4 allows percentile values for these properties
    | "fontStretch"
    | "opacity"]: KnownCSSValues<P>;
};

export interface TypedCSSProperties
  extends PrimitiveUnionProperties,
    UnionOfStringProperties {
  backgroundAttachment: BackgroundAttachmentValue;
  backgroundBlendMode: BackgroundBlendModeValue;
  backgroundClip: BackgroundClipValue;
  backgroundColor: CSSColor;
  backgroundOrigin: BackgroundOriginValue;
  backgroundPosition: BackgroundPositionValue;
  backgroundRepeat: BackgroundRepeatValue;
  backgroundSize: BackgroundSizeValue;
  blockSize: KnownCSSValues<"blockSize"> | CSSLengthPercentage | FitContent;
  border: CSS.Globals | BorderValue;
  borderBottom: CSS.Globals | BorderValue;
  borderBottomColor: CSS.Globals | CSSColor | "none";
  borderBottomLeftRadius: CSSLengthPercentage;
  borderBottomRightRadius: CSSLengthPercentage;
  borderBottomWidth: CSSLengthPercentage;
  borderColor: CSSColor;
  borderImageSlice: BorderImageSliceValue;
  borderImageSource: KnownCSSValues<"borderImageSource"> | CSSImage;
  borderImageWidth: FourDimensionalValue;
  borderLeft: CSS.Globals | BorderValue;
  borderLeftColor: CSS.Globals | CSSColor | "none";
  borderLeftWidth: CSSLengthPercentage;
  borderRadius: BorderRadiusValue;
  borderRight: CSS.Globals | BorderValue;
  borderRightColor: CSS.Globals | CSSColor | "none";
  borderRightWidth: CSSLengthPercentage;
  borderTop: CSS.Globals | BorderValue;
  borderTopColor: CSS.Globals | CSSColor | "none";
  borderTopLeftRadius: CSSLengthPercentage;
  borderTopRightRadius: CSSLengthPercentage;
  borderTopWidth: CSSLengthPercentage;
  borderWidth: FourDimensionalValue;
  bottom: CSSLengthPercentage | "auto";
  boxShadow: BoxShadowValue;
  caretColor: CSS.Globals | CSSColor | "auto";
  clipPath: ClipPathValue;
  color: CSSColor;
  contain: ContainValue;
  flex: FlexValue;
  flexFlow: FlexFlowValue;
  fontFamily: string;
  fontSize: CSSLengthPercentage;
  gridRowGap: KnownCSSValues<"rowGap"> | CSSLengthPercentage;
  height: CSSLengthPercentage;
  inlineSize: KnownCSSValues<"inlineSize"> | FitContent | CSSLengthPercentage;
  left: CSSLengthPercentage | "auto";
  letterSpacing: KnownCSSValues<"letterSpacing"> | CSSLengthPercentage;
  lineHeight: CSSLengthPercentage | number;
  margin: FourDimensionalValue;
  marginBottom: CSSLengthPercentage;
  marginLeft: CSSLengthPercentage;
  marginRight: CSSLengthPercentage;
  marginTop: CSSLengthPercentage;
  maxHeight: CSSLengthPercentage;
  maxWidth: CSSLengthPercentage;
  minHeight: CSSLengthPercentage;
  minWidth: CSSLengthPercentage;
  outlineColor: CSS.Globals | CSSColor;
  outlineWidth: KnownCSSValues<"outlineWidth"> | CSSLength;
  overflow: OverflowValue;
  padding: FourDimensionalValue;
  paddingBottom: CSSLengthPercentage;
  paddingLeft: CSSLengthPercentage;
  paddingRight: CSSLengthPercentage;
  paddingTop: CSSLengthPercentage;
  quotes: QuotesValue;
  right: CSSLengthPercentage | "auto";
  rowGap: KnownCSSValues<"rowGap"> | CSSLengthPercentage;
  shapeMargin: CSS.Globals | CSSLengthPercentage;
  tabSize: CSS.Properties<never>["tabSize"] | CSSLengthPercentage;
  textDecorationColor: KnownCSSValues<"textDecorationColor"> | CSSColor;
  textDecorationLine: TextDecorationLineValue;
  textDecorationThickness:
    | KnownCSSValues<"textDecorationThickness">
    | CSSLengthPercentage;
  textShadow: TextShadowValue;
  top: CSSLengthPercentage | "auto";
  transitionDelay: TransitionDelayValue;
  transitionDuration: TransitionDurationValue;
  transitionProperty: TransitionPropertyValue;
  verticalAlign: KnownCSSValues<"verticalAlign"> | CSSLengthPercentage;
  width: KnownCSSValues<"width"> | CSSLengthPercentage | FitContent;
  wordSpacing: KnownCSSValues<"wordSpacing"> | CSSLengthPercentage;
  // TODO multiple animations =================================================
  animationDelay: KnownCSSValues<"animationDelay"> | CSSTime;
  animationDuration: KnownCSSValues<"animationDuration"> | CSSTime;
  animationIterationCount: KnownCSSValues<"animationIterationCount"> | CSSTime;
  // ==========================================================================
}

export type TypedCSSArray = {
  [P in keyof TypedCSSProperties]: readonly [P, TypedCSSProperties[P]];
}[keyof TypedCSSProperties][];
