import * as CSS from "csstype";

import { BoxShadowValue, FlexValue, FourDimensionalValue } from "./property";
import { CSSLength } from "./unit";
import { CSSColor } from "./color";

// These properties can be safely expressed without custom interfaces
type PrimitiveUnionProperties = Required<
  Pick<
    CSS.Properties,
    | "all"
    | "clear"
    | "overflowX"
    | "overflowY"
    | "overscrollBehaviorX"
    | "overscrollBehaviorY"
    | "pointerEvents"
    | "position"
    | "textAlign"
    | "textAlignLast"
    | "userSelect"
    | "visibility"
    | "whiteSpace"
    | "wordBreak"
    | "wordWrap"
    | "writingMode"
  >
>;

type KnownCSSValues<
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
  [P in "alignContent" | "alignItems" | "alignSelf"]: KnownCSSValues<P>;
};

export interface TypedCSSProperties
  extends PrimitiveUnionProperties,
    UnionOfStringProperties {
  display: KnownCSSValues<"display">;
  width: CSSLength;
  height: CSSLength;
  lineHeight: CSSLength | number;
  fontSize: CSSLength;
  fontFamily: string;
  color: CSSColor;
  backgroundColor: CSSColor;
  padding: FourDimensionalValue;
  paddingTop: CSSLength;
  paddingRight: CSSLength;
  paddingBottom: CSSLength;
  paddingLeft: CSSLength;
  margin: FourDimensionalValue;
  marginTop: CSSLength;
  marginRight: CSSLength;
  marginBottom: CSSLength;
  marginLeft: CSSLength;
  borderRadius: FourDimensionalValue;
  boxShadow: BoxShadowValue;
  justifyContent: KnownCSSValues<"justifyContent">;
  top: CSSLength | "auto";
  left: CSSLength | "auto";
  bottom: CSSLength | "auto";
  right: CSSLength | "auto";
  minHeight: CSSLength;
  maxHeight: CSSLength;
  minWidth: CSSLength;
  maxWidth: CSSLength;
  borderStyle: KnownCSSValues<"borderStyle">;
  borderColor: CSSColor;
  borderWidth: FourDimensionalValue;
  borderTopWidth: CSSLength;
  borderRightWidth: CSSLength;
  borderBottomWidth: CSSLength;
  borderLeftWidth: CSSLength;
  borderTopColor: CSS.Globals | CSSColor | "none";
  borderRightColor: CSS.Globals | CSSColor | "none";
  borderBottomColor: CSS.Globals | CSSColor | "none";
  borderLeftColor: CSS.Globals | CSSColor | "none";
  cursor: KnownCSSValues<"cursor">;
  flex: FlexValue;
  zoom: "auto" | number;
  zIndex: CSS.Globals | "auto" | number;
  verticalAlign: KnownCSSValues<"verticalAlign"> & CSSLength;
  wordSpacing: KnownCSSValues<"wordSpacing"> & CSSLength;
}

export type TypedCSSArray = {
  [P in keyof TypedCSSProperties]: [P, TypedCSSProperties[P]];
}[keyof TypedCSSProperties][];
