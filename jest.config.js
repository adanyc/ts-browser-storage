module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  coverageReporters: ['json', 'text', 'clover', 'lcov']
};
