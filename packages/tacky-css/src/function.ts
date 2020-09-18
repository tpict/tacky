import { TackyVariant } from "./types";
import { CSSLengthPercentage } from "./unit";

export type CSSURL = TackyVariant<"url">;
export const url = (url: URL): CSSURL => `url(${url})` as CSSURL;

export type FitContent = TackyVariant<"fitContent">;
export const fitContent = (arg: CSSLengthPercentage): FitContent =>
  `fitContent(${arg})` as FitContent;
