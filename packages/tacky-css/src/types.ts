import * as CSS from "csstype";

import { MediaQuery } from "./media/types";

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

// Terminology taken from ReasonML - the idea is something like a variant that
// takes a single string arg, so the type system can distinguish strings from
// different sources even if their values aren't known.
//
// TODO: In TS 4.1 use
// export type TackyVariant<T extends string> = string & {[_ in T as `_tacky_id_${T}`]: never };
// This is safer as users will be less likely to access the "brand" property
// (which is removed by the Babel macro)
export type TackyVariant<T extends string> = string & { _tacky_id: T };

type TackyVariantRecord<T extends keyof CSS.Properties> = {
  [Property in T]: TackyVariant<Property>;
};

export type TypedCSSProperties = PrimitiveUnionProperties &
  UnionOfStringProperties &
  TackyVariantRecord<
    | "backgroundAttachment"
    | "backgroundBlendMode"
    | "backgroundClip"
    | "backgroundColor"
    | "backgroundImage"
    | "backgroundOrigin"
    | "backgroundPosition"
    | "backgroundRepeat"
    | "backgroundSize"
    | "blockSize"
    | "border"
    | "borderBottom"
    | "borderBottomColor"
    | "borderBottomLeftRadius"
    | "borderBottomRightRadius"
    | "borderBottomWidth"
    | "borderColor"
    | "borderImageOutset"
    | "borderImageRepeat"
    | "borderImageSlice"
    | "borderImageSource"
    | "borderImageWidth"
    | "borderLeft"
    | "borderLeftColor"
    | "borderLeftWidth"
    | "borderRadius"
    | "borderRight"
    | "borderRightColor"
    | "borderRightWidth"
    | "borderTop"
    | "borderTopColor"
    | "borderTopLeftRadius"
    | "borderTopRightRadius"
    | "borderTopWidth"
    | "borderWidth"
    | "bottom"
    | "boxShadow"
    | "caretColor"
    | "clipPath"
    | "color"
    | "contain"
    | "flex"
    | "flexFlow"
    | "fontFamily"
    | "fontSize"
    | "gridRowGap"
    | "height"
    | "inlineSize"
    | "left"
    | "letterSpacing"
    | "lineHeight"
    | "margin"
    | "marginBottom"
    | "marginLeft"
    | "marginRight"
    | "marginTop"
    | "maxHeight"
    | "maxWidth"
    | "minHeight"
    | "minWidth"
    | "outlineColor"
    | "outlineWidth"
    | "overflow"
    | "padding"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "quotes"
    | "right"
    | "rowGap"
    | "shapeMargin"
    | "tabSize"
    | "textDecorationColor"
    | "textDecorationLine"
    | "textDecorationThickness"
    | "textShadow"
    | "top"
    | "transitionDelay"
    | "transitionDuration"
    | "transitionProperty"
    | "verticalAlign"
    | "width"
    | "wordSpacing"
    // TODO multiple animations ===============================================
    | "animationDelay"
    | "animationDuration"
    | "animationIterationCount"
    // ========================================================================
  >;

export type TypedCSSArray<Properties = TypedCSSProperties> = (
  | {
      [P in keyof Properties]: readonly [P, Properties[P]];
    }[keyof Properties]
  | [MediaQuery, TypedCSSArray<Properties>]
)[];
