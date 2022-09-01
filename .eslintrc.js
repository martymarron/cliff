module.exports = {
  extends: [
    'oclif',
    'oclif-typescript',
  ],
  overrides: [
    {
      files: ['src/**/*.ts'],
      extends: ['.eslintrc.ts.js'],
    },
    {
      files: ['__tests__/**/*.ts'],
      extends: ['.eslintrc.jest'],
    },
  ],
}
