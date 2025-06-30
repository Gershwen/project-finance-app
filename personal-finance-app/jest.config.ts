import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^next/image$': '<rootDir>/__mocks__/nextImageMock.tsx',
  },
  transform: {
  '^.+\\.(ts|tsx)$': [
    'ts-jest',
    {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }
  ]
},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;

