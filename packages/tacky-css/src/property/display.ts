import { Property, Values } from "../generated/types";

// TODO: This is incorrect
export const display: Property.Display = (arg: unknown) =>
  ["display", arg as Values["display"]] as const;
