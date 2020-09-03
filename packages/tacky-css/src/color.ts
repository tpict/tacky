export type Rgb = string & {
  _tacky_id_rgb: never;
};

export const rgb = (red: number, green: number, blue: number): Rgb =>
  `rgb(${red}, ${green}, ${blue})` as Rgb;

export type Rgba = string & {
  _tacky_id_rgba: never;
};

export const rgba = (
  red: number,
  green: number,
  blue: number,
  alpha: number
): Rgba => `rgba(${red}, ${green}, ${blue}, ${alpha})` as Rgba;

export type CSSColor = Rgb | Rgba;
