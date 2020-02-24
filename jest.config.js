module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: 'tsconfig.test.json',
    },
  },
  testEnvironment: 'node',
  globalSetup: './src/test/global-setup.ts',
  globalTeardown: './src/test/global-teardown.ts',
};
