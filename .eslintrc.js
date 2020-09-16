module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        varsIgnorePattern: "^_.",
        argsIgnorePattern: "^_.",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    "react/prop-types": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          object: false,
        },
      },
    ],
    "arrow-parens": ["error", "as-needed"],
    "@typescript-eslint/no-namespace": 0,
  },
};
