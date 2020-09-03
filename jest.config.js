module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>/src/"],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  globals: {
    DEVELOPMENT: true,
    TESTING: true,
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],
  testTimeout: 10000,
};
