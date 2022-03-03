module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["lib/*.js"], // tsLint 무시할 폴더 지정
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "vue/prettier": "error",
    'semi': [ 'error', 'always' ], // 세미콜론 허용여부
    'semi-spacing': [ 'error', { 'before': false, 'after': true }], // 세미콜론 빈공간 허용 여부 - https://eslint.org/docs/rules/semi-spacing
    'space-before-blocks': 'error', // block 이전 빈공간
    'indent': [ 'error', 4 ], // indent는 4로 고정
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 1 }], // 허용되는 빈 줄 개수
    'no-trailing-spaces': 'error', // 줄 끝 부분 빈 공간 허용 여부
    'space-in-parens': [ 'error', 'never' ], // () 사이에 빈 공간 허용여부
    'quotes': [ 'error', 'double' ], // quote가 single / double 여부
    '@typescript-eslint/no-unused-vars': [ 'warn' ], // 미사용 변수 사용 시 에러 - https://github.com/typescript-eslint/typescript-eslint/blob/v2.34.0/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/camelcase': 'off',
    'no-unused-vars': 'off',
    'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true }], // keyword 사이 빈공간 허용여부 -  https://eslint.org/docs/rules/key-spacing
    'no-multi-spaces': 'error', // 불필요한 multi 빈공간 제거  - https://eslint.org/docs/rules/no-multi-spaces
    'keyword-spacing': [ 'error', { 'after': true }], //
    'space-before-function-paren': [ 'error', { // 함수명 뒤에 빈공간 제거 - https://eslint.org/docs/rules/space-before-function-paren
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
    }],
    'comma-spacing': [ 'error', { 'before': false, 'after': true }], // comma 빈 공간 여부 - https://eslint.org/docs/rules/comma-spacing
    'space-infix-ops': [ 'error', { 'int32Hint': false }], // 연산자 사이 공백 - https://eslint.org/docs/rules/space-infix-ops
    'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }], // json obejct 빈 공간 허용여부 - https://eslint.org/docs/rules/object-curly-spacing
    'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false, 'arraysInArrays': false }], // array 빈 공간 허용여부 - https://eslint.org/docs/rules/space-in-brackets
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
