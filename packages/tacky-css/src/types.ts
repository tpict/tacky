// Terminology taken from ReasonML - the idea is something like a variant that
// takes a single string arg, so the type system can distinguish strings from
// different sources even if their values aren't known.
//
// TODO: In TS 4.1 use
// export type TackyVariant<T extends string> = string & {[_ in T as `_tacky_id_${T}`]: never };
// This is safer as users will be less likely to access the "brand" property
// (which is removed by the Babel macro)
export type TackyVariant<T extends string> = string & { _tacky_id: T };
