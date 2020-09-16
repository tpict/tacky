namespace CSS {
  export type Global = "initial" | "unset";
  export type Clear = "left" | "right";
}

namespace ValueEnum {
  export enum Clear {
    _ = "",
  }
}

interface Value {
  clear: string & ValueEnum.Clear;
}

export type PropertyTuple<T extends keyof Value> = [T, Value[T]];

namespace Property {
  export interface Clear {
    (clear: CSS.Clear): PropertyTuple<"clear">;
    (global: CSS.Global): PropertyTuple<"clear">;
  }
}

namespace Property {
  export interface Clear {
    (example: "primary"): PropertyTuple<"clear">;
  }
}

export const clear: Property.Clear = (arg: unknown) => ["clear", arg] as any;
