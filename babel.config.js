module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-react", "@babel/preset-env", "@babel/typescript"],
    plugins: [
      "macros",
      "@babel/plugin-transform-runtime",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "@babel/proposal-optional-chaining",
      "@babel/proposal-nullish-coalescing-operator",
    ],
  };
};
