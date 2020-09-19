import { FitContent } from "./function";
import { Rgb, Rgba, Hsl, Hsla } from "./color";
import { CSSLength, CSSLengthPercentage, Percent, CSSTime } from "./unit";

declare module "./generated/types" {
  namespace ManualDataType {
    export type TLength = CSSLength;
    export type TLengthPercentage = CSSLengthPercentage;
    export type TPercentage = Percent;
    export type TTime = CSSTime;
    export type TFitContent = FitContent;
    export type TRgb = Rgb;
    export type TRgba = Rgba;
    export type THsl = Hsl;
    export type THsla = Hsla;

    export type TTranslate = never;
    export type TTranslateX = never;
    export type TTranslateY = never;
    export type TTranslateZ = never;
    export type TTranslate3d = never;
    export type TScale = never;
    export type TScaleX = never;
    export type TScaleY = never;
    export type TScaleZ = never;
    export type TScale3d = never;
    export type TSkew = never;
    export type TSkewX = never;
    export type TSkewY = never;
    export type TRotate = never;
    export type TRotateX = never;
    export type TRotateY = never;
    export type TRotateZ = never;
    export type TRotate3d = never;
    export type TPerspective = never;
    export type TMatrix = never;
    export type TMinmax = never;
    export type TRepeat = never;
    export type TSteps = never;
    export type TChild = never;
    export type TElement = never;
    export type TImage = never;
    export type TSaturate = never;
    export type TInvert = never;
    export type TGrayscale = never;
    export type TContrast = never;
    export type TBlur = never;
    export type TLeader = never;
    export type TPath = never;
    export type TInset = never;
    export type TRay = never;
    export type TRect = never;
    export type TEllipse = never;
    export type TSnapInterval = never;
    export type TSwash = never;
    export type TStylistic = never;
    export type TStyleset = never;
    export type TAnnotation = never;
  }
}
