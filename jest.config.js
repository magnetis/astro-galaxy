module.exports = {
  setupFiles: ['./jest.setup.js'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/', './node_modules/', './jest.setup.js'],
  transform: {
    '^.+\\.[t|j]s?$': 'babel-jest',
  },
};
