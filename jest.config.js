module.exports = {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/setupTests.ts"],
  transform: { "^.+\\.svg$": "<rootDir>/svgTransform.ts" },
};
