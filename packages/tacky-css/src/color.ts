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

export type CSSColor = Rgb | Rgba | "currentcolor" | "transparent";
