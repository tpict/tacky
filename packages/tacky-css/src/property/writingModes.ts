import { Values, Property } from "../generated/types";

export const textCombineUpright: Property.TextCombineUpright = (arg: unknown) =>
  ["textCombineUpright", arg as Values["textCombineUpright"]] as const;
