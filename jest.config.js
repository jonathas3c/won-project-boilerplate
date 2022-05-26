module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules/', 'dist/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
