module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'prettier',
  ],
  rules: {
    'jest/expect-expect': 'off',
  },
  globals: {
    cy: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'cypress'],
  root: true,
}
