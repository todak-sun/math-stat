module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
