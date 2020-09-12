import { TackyVariant } from "./types";

// Length
export type Rem = TackyVariant<"rem">;
export const rem = (magnitude: number): Rem => `${magnitude}rem` as Rem;

export type Em = TackyVariant<"em">;
export const em = (magnitude: number): Em => `${magnitude}em` as Em;

export type Px = TackyVariant<"px">;
export const px = (magnitude: number): Px => `${magnitude}px` as Px;

export type Percent = TackyVariant<"percent">;
export const percent = (magnitude: number): Percent =>
  `${magnitude}%` as Percent;

// Time
export type Ms = TackyVariant<"ms">;
export const ms = (magnitude: number): Ms => `${magnitude}ms` as Ms;

export type S = TackyVariant<"s">;
export const s = (magnitude: number): S => `${magnitude}s` as S;

// Angle
export type Deg = TackyVariant<"deg">;
export const deg = (magnitude: number): Deg => `${magnitude}deg` as Deg;

export type Rad = TackyVariant<"rad">;
export const rad = (magnitude: number): Rad => `${magnitude}rad` as Rad;

export type Grad = TackyVariant<"grad">;
export const grad = (magnitude: number): Grad => `${magnitude}grad` as Grad;

export type Turn = TackyVariant<"turn">;
export const turn = (magnitude: number): Turn => `${magnitude}turn` as Turn;

// Resolution
export type Dpi = TackyVariant<"dpi">;
export const dpi = (magnitude: number): Dpi => `${magnitude}dpi` as Dpi;

export type Dpcm = TackyVariant<"dpcm">;
export const dpcm = (magnitude: number): Dpi => `${magnitude}dpi` as Dpi;

export type Dppx = TackyVariant<"dppx">;
export const dppx = (magnitude: number): Dpi => `${magnitude}dpi` as Dpi;

export type CSSLength = Rem | Em | Px | 0;
export type CSSLengthPercentage = CSSLength | Percent;
export type CSSTime = Ms | S | 0;
export type CSSAngle = Deg | Rad | Grad | Turn;
export type CSSResolution = Dpi | Dpcm | Dppx;
