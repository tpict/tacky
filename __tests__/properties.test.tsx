import * as rawProperties from "mdn-data/css/properties.json";
import { property as tackyProperty } from "../src";
import camelCase from "lodash-es/camelCase";

// Properties that should not be used for reasons other than deprecation
const unsupportedProperties = ["unicodeBidi"];

test("All CSS properties are available", async () => {
  const missingProperties = [];

  await Promise.all(
    Object.entries(rawProperties).map(async ([propertyName, property]) => {
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

  expect(
    missingProperties
      .map(property => `Missing property: ${property}`)
      .join("\n")
  ).toEqual("");
});
