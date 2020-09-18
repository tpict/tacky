import { color, marginLeft } from "./generated";
import { CSSColor } from "./color";
import { CSSLength, CSSLengthPercentage, Percent, CSSTime } from "./unit";

declare module "./generated" {
  namespace ManualDataType {
    export interface IColor {
      cool: never;
    }

    export type TLength = CSSLength;
    export type TLengthPercentage = CSSLengthPercentage;
    export type TPercentage = Percent;
    export type TTime = CSSTime;
  }
}

const test = color("cool")[1];
