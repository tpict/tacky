import { createMacro } from "babel-plugin-macros";
import { preval } from "./preval";

import type { Tacky } from "./index";

const macro = createMacro(({ references }) => {
  const { tacky = [] } = references;

  tacky.forEach(path => {
    preval(path);
  });
});

export const tacky: Tacky = (undefined as unknown) as Tacky;

const macroExport: never = macro as never;
export default macroExport;
