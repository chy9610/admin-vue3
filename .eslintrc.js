// @see: http://eslint.cn

modules.exports = {
  // 配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 指定如何解析语法
  parser: "vue-eslint-parser",
  // 解析语法配置 (优先级低于 parser)
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
