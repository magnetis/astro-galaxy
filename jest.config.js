module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  setupFiles: ["./jest.setup.js"],
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/']
};