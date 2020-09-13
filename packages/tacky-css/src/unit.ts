import { TackyVariant } from "./types";
import { MatchDecimal } from "./utils";

// Length
export const rem = <T extends number>(magnitude: T): `${T}rem` => `${magnitude}rem` as `${T}rem`;

export const em = <T extends number>(magnitude: T): `${T}em` => `${magnitude}em` as `${T}em`;

export const px = <T extends number>(magnitude: T): `${T}px` => `${magnitude}px` as `${T}px`;

export const percent = <T extends number>(magnitude: T): `${T}%` => `${magnitude}%` as `${T}%`;

// Time
export const ms = <T extends number>(magnitude: T): `${T}ms` => `${magnitude}ms` as `${T}ms`;
export const s = <T extends number>(magnitude: T): `${T}s` => `${magnitude}s` as `${T}s`;

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

export type CSSLength<T extends string> = MatchDecimal<T, "rem" | "em" | "px"> | 0;
export type CSSPercentage<T extends string> = MatchDecimal<T, "%"> | 0;
export type CSSLengthPercentage<T extends string> = CSSLength<T> | CSSPercentage<T>;
export type CSSTime<T extends string> = MatchDecimal<T, "ms" | "s"> | 0;
export type CSSAngle = Deg | Rad | Grad | Turn;
export type CSSResolution<T extends string> = MatchDecimal<T, "dpi" | "dpcm" | "dppx"> | 0;
