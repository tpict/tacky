export type Rem = string & {
  _tacky_id_rem: never;
};

export const rem = (magnitude: number): Rem => `${magnitude}rem` as Rem;

export type Em = string & {
  _tacky_id_em: never;
};

export const em = (magnitude: number): Em => `${magnitude}em` as Em;

export type Px = string & {
  _tacky_id_px: never;
};

export const px = (magnitude: number): Px => `${magnitude}px` as Px;

export type Percent = string & {
  _tacky_id_percent: never;
};

export const percent = (magnitude: number): Percent =>
  `${magnitude}%` as Percent;

export type CSSLength = Rem | Em | Px | Percent | 0;
