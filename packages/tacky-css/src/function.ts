import { CSSLengthPercentage } from "./unit";

export type CSSURL = string & {
  _tacky_id_url: never;
};
export const url = (url: URL): CSSURL => `url(${url})` as CSSURL;

export type FitContent = string & {
  _tacky_id_fit_content: never;
};

export const fitContent = (arg: CSSLengthPercentage): FitContent =>
  `fitContent(${arg})` as FitContent;
