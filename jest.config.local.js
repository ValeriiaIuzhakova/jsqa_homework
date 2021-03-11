module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath": "jest-report/test-report.html"
    }],
  ],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/*.spec.*'],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
