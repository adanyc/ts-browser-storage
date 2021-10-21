module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'quotes': [2, 'single', { 'avoidEscape': true }]
  },
  ignorePatterns: ['src/**/*.spec.ts'],
};
