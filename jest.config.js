module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '^/(.+)': '<rootDir>/$1',
    '@/types/(.+)': '<rootDir>/types/$1',
    '@/interface/(.+)': '<rootDir>/interface/$1',
    '@/components/(.+)': '<rootDir>/components/$1',
    '@/lib/(.+)': '<rootDir>/lib/$1',
    '@/utils/(.+)': '<rootDir>/utils/$1',
  },
}
