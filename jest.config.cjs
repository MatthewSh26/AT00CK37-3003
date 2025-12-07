/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/.internal/**'
  ],
  coverageDirectory: 'coverage'
};