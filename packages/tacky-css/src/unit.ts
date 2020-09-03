// Length
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

// Time
export type Ms = string & {
  _tacky_id_ms: never;
};

export const ms = (magnitude: number): Ms => `${magnitude}ms` as Ms;

export type S = string & {
  _tacky_id_s: never;
};

export const s = (magnitude: number): S => `${magnitude}s` as S;

// Angle
export type Deg = string & {
  _tacky_id_deg: never;
};

export type Rad = string & {
  _tacky_id_rad: never;
};

export type Grad = string & {
  _tacky_id_grad: never;
};

export type Turn = string & {
  _tacky_id_turn: never;
};

export const deg = (magnitude: number): Deg => `${magnitude}deg` as Deg;
export const rad = (magnitude: number): Rad => `${magnitude}rad` as Rad;
export const grad = (magnitude: number): Grad => `${magnitude}grad` as Grad;
export const turn = (magnitude: number): Turn => `${magnitude}turn` as Turn;

export type CSSLength = Rem | Em | Px | 0;
export type CSSLengthPercentage = CSSLength | Percent;
export type CSSTime = Ms | S | 0;
export type CSSAngle = Deg | Rad | Grad | Turn;
