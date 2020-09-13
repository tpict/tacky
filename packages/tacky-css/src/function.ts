import { TackyVariant } from "./types";
import { CSSLengthPercentage } from "./unit";

export type CSSURL = TackyVariant<"url">;
export const url = (url: URL): CSSURL => `url(${url})` as CSSURL;

export type FitContent = TackyVariant<"fitContent">;
export const fitContent = <T extends string>(
  arg: CSSLengthPercentage<T>
): FitContent => `fitContent(${arg})` as FitContent;
