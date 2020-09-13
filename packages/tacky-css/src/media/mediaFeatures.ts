// TODO: Ratio is tricky at the moment as it doesn't support decimal values and
// TS can't currently enforce integer values

import { CSSLength, CSSResolution } from "../unit";
import { MediaExpression } from "./types";

export const anyHover = (support: "none" | "hover"): MediaExpression =>
  `(any-hover: ${support})` as MediaExpression;

export const anyPointer = (
  accuracy: "none" | "coarse" | "fine"
): MediaExpression => `(any-pointer: ${accuracy})` as MediaExpression;

export const color = (bits?: number): MediaExpression =>
  `(color${bits ? `: ${bits}` : ""})` as MediaExpression;

export const colorGamut = (gamut: "srgb" | "p3" | "rec2020"): MediaExpression =>
  `(colorGamut: ${gamut})` as MediaExpression;

export const height = <T extends string>(
  value: CSSLength<T>
): MediaExpression => `(height: ${value})` as MediaExpression;

export const hover = (support: "none" | "hover"): MediaExpression =>
  `(hover: ${support})` as MediaExpression;

export const maxColor = (bits: number): MediaExpression =>
  `(max-color: ${bits})` as MediaExpression;

export const maxHeight = <T extends string>(
  value: CSSLength<T>
): MediaExpression => `(max-height: ${value})` as MediaExpression;

export const maxMonochrome = (bits: number): MediaExpression =>
  `(max-monochrome: ${bits})` as MediaExpression;

export const maxResolution = <T extends string>(
  value: CSSResolution<T>
): MediaExpression => `(max-resolution: ${value})` as MediaExpression;

export const maxWidth = <T extends string>(
  value: CSSLength<T>
): MediaExpression => `(max-width: ${value})` as MediaExpression;

export const minColor = (bits: number): MediaExpression =>
  `(min-color: ${bits})` as MediaExpression;

export const minHeight = <T extends string>(
  value: CSSLength<T>
): MediaExpression => `(min-height: ${value})` as MediaExpression;

export const minMonochrome = (bits: number): MediaExpression =>
  `(min-monochrome: ${bits})` as MediaExpression;

export const minResolution = <T extends string>(
  value: CSSResolution<T>
): MediaExpression => `(min-resolution: ${value})` as MediaExpression;

export const minWidth = <T extends string>(
  value: CSSLength<T>
): MediaExpression => `(min-width: ${value})` as MediaExpression;

export const monochrome = (bits?: number): MediaExpression =>
  `(monochrome${bits ? `: ${bits}` : ""})` as MediaExpression;

export const orientation = (value: "portrait" | "landscape"): MediaExpression =>
  `(orientation: ${value})` as MediaExpression;

export const pointer = (
  accuracy: "none" | "coarse" | "fine"
): MediaExpression => `(pointer: ${accuracy})` as MediaExpression;

export const resolution = <T extends string>(
  value: CSSResolution<T>
): MediaExpression => `(resolution: ${value})` as MediaExpression;

export const width = <T extends string>(value: CSSLength<T>): MediaExpression =>
  `(width: ${value})` as MediaExpression;
