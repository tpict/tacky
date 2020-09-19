import * as CSS from "csstype";
import { PropertyTuple } from "./generated/types";
import { CSSLengthPercentage } from "./unit";

export { PropertyTuple };

export interface FourDimensionalProperty<ReturnType, ValueType> {
  (global: CSS.Globals): ReturnType;
  (all: ValueType): ReturnType;
  (vertical: ValueType, horizontal: ValueType): ReturnType;
  (top: ValueType, right: ValueType, bottom: ValueType): ReturnType;
  (
    top: ValueType,
    right: ValueType,
    bottom: ValueType,
    left: ValueType
  ): ReturnType;
}

export type FourDimensionalArgs<Value = CSSLengthPercentage> =
  | [all: Value]
  | [vertical: Value, horizontal: Value]
  | [top: Value, right: Value, bottom: Value]
  | [top: Value, right: Value, bottom: Value, left: Value];
