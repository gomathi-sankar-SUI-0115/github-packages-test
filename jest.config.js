module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    '*/**': {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80,
    },
  },
};
