module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
    ],
    plugins: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "sourceType": "module",
      "project": "./tsconfig.json" 
    },
    root: true,
    rules: {}
  }