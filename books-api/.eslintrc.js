module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: [
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    quotes: ["error", "double"],
    "no-console": "off",
    "comma-dangle": "off",
    curly: ["error", "multi-line"],
    "no-throw-literal": "off",
    "consistent-return": "off"
  },
};
