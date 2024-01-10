import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@metronome-industries/metronome$': '<rootDir>/src/index.ts',
    '^@metronome-industries/metronome/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@metronome-industries/metronome/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
