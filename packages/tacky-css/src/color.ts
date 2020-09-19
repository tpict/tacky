import { TackyVariant } from "./types";

export type Rgb = TackyVariant<"rgb">;
export const rgb = (red: number, green: number, blue: number): Rgb =>
  `rgb(${red}, ${green}, ${blue})` as Rgb;

export type Rgba = TackyVariant<"rgba">;
export const rgba = (
  red: number,
  green: number,
  blue: number,
  alpha: number
): Rgba => `rgba(${red}, ${green}, ${blue}, ${alpha})` as Rgba;

export type Hsl = TackyVariant<"hsl">;
export const hsl = (hue: number, saturation: number, lightness: number): Hsl =>
  `hsl(${hue}, ${saturation}, ${lightness})` as Hsl;

export type Hsla = TackyVariant<"hsla">;
export const hsla = (
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number
): Hsla => `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})` as Hsla;

export type CSSColor = Rgb | Rgba | Hsl | Hsla;
