module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'ember',
  env: {
    'browser': true
  },
  plugins: [
    'ember-suave'
  ],
  rules: {
    "object-curly-spacing": [2, "always"],
    "no-magic-numbers": ["warn", { "ignoreArrayIndexes": true, "ignore": [0,1,2] }],
    "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
    "arrow-parens": ["warn", "always"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-alert": ["warn"],
    "no-debugger": ["warn"],
    "no-unused-vars": ["warn", {"args": "after-used"}],
    "prefer-reflect": ["warn", { "exceptions": ["call"] }],
    "ember-suave/no-direct-property-access": "warn",
    "ember-suave/prefer-destructuring": "warn",
    "ember-suave/require-access-in-comments": "warn",
    "ember-suave/require-const-for-ember-properties": "warn"
  }
};
