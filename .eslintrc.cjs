module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'google'],
  rules: {
    'max-len': ['error', {code: 100, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreStrings: true}],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'new-cap': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};
