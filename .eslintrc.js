module.exports = {
  extends: ['./dist/next.js'],
  ignorePatterns: ['*.js', '*.d.ts'],
  env: {
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
