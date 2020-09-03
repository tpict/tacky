import * as rawProperties from "mdn-data/css/properties.json";
import { property as tackyProperty } from "../packages/tacky-css/src";
import camelCase from "lodash-es/camelCase";

// Properties that are currently out-of-scope for Tacky, mainly properties with
// very specialized syntax. These should be supported eventually. Providing
// loosely typed functions for them now would result in breaking changes in the
// future.
const outOfScopeProperties = [
  // Challenging to implement
  "animation",
  "content",
  "filter",
  "animationName", // needs user-extendable interface
  "animationTimingFunction",
  "backdropFilter",
  "background",
  "backgroundImage",
  "shapeOutside",
  "transform",
  "transitionTimingFunction",

  // Poor browser support
  "hangingPunctuation",
  "rotate",
  "scale",
  "scrollbarColor",
  "scrollbarWidth",

  // These seem _very_ rarely used, but this might be bias on my behalf as
  // they seem to be targeted at differently-oriented writing systems.
  "borderBlock",
  "borderBlockColor",
  "borderBlockStyle",
  "borderBlockWidth",
  "borderBlockEnd",
  "borderBlockEndColor",
  "borderBlockEndStyle",
  "borderBlockEndWidth",
  "borderBlockStart",
  "borderBlockStartColor",
  "borderBlockStartStyle",
  "borderBlockStartWidth",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderInline",
  "borderInlineEnd",
  "borderInlineColor",
  "borderInlineStyle",
  "borderInlineWidth",
  "borderInlineEndColor",
  "borderInlineEndStyle",
  "borderInlineEndWidth",
  "borderInlineStart",
  "borderInlineStartColor",
  "borderInlineStartStyle",
  "borderInlineStartWidth",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingInline",
  "paddingInlineEnd",
  "paddingInlineStart",
];

// Properties that should not be used for reasons other than deprecation.
const unsupportedProperties = [
  ...outOfScopeProperties,
  "fontSmoothing", // use is discouraged
  "unicodeBidi", // for DTD only
  "willChange", // last resort
];

test("All CSS properties are available", async () => {
  const missingProperties: string[] = [];

  await Promise.all(
    Object.entries(rawProperties).map(async ([propertyName, property]) => {
      if (propertyName === "default") {
        // ignore default export
        return;
      }

      if (propertyName.startsWith("-")) {
        // TODO: Figure out a naming convention for these
        return;
      }

      if (["obsolete", "experimental"].includes(property.status)) {
        // TODO: Include experimental properties?
        return;
      }

      try {
        const data = (await import(
          `../node_modules/mdn-browser-compat-data/css/properties/${propertyName}.json`
        )) as MDN.PropertiesCompat;
        const status = data?.css?.properties?.[propertyName]?.__compat?.status;

        // Deprecated/experimental browser support
        if (status?.deprecated || status?.experimental) {
          return;
        }
      } catch (err) {}

      propertyName = camelCase(propertyName);

      if (unsupportedProperties.includes(propertyName)) {
        return;
      }

      const func = tackyProperty[propertyName];
      !func && missingProperties.push(propertyName);
    })
  );

  if (missingProperties.length > 0) {
    const propertyErrors = missingProperties
      .map(property => `Missing property: ${property}`)
      .join("\n");

    expect(
      `${missingProperties.length} missing properties located:\n${propertyErrors}`
    ).toEqual("No missing properties");
  }
});
