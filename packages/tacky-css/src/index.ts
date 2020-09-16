import { color } from "./generated";

declare module "./generated" {
  namespace ManualDataType {
    export interface IColor {
      cool: never;
    }
  }
}

const test = color("cool")[1];
