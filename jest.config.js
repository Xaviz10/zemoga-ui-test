// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// const customJestConfig = {
//   testEnvironment: "jest-environment-jsdom",
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
//   },
// };

// module.exports = createJestConfig(customJestConfig);

const babelJest = require("babel-jest");

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["./setupTests.js"],
};

module.exports = {
  ...customJestConfig,
  transform: {
    ...customJestConfig.transform,
  },
};
