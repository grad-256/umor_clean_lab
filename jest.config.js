module.exports = {
  // preset: 'ts-jest',
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  // },
  // globals: {
  //   'ts-jest': {
  //     tsConfig: 'tsconfig.json',
  //   },
  // },
  roots: ['<rootDir>/'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^/(.+)': '<rootDir>/$1',
    '@/types/(.+)': '<rootDir>/types/$1',
    '@/interface/(.+)': '<rootDir>/interface/$1',
    '@/components/(.+)': '<rootDir>/components/$1',
    '@/lib/(.+)': '<rootDir>/lib/$1',
    '@/utils/(.+)': '<rootDir>/utils/$1',
  },
}
