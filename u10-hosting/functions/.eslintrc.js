module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'google',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module'
  },
  ignorePatterns: [
    '/dart/**/*',
    '/lib/**/*' // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ]
}
