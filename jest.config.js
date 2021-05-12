module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
