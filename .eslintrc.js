module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [1, "always-multiline"],
    // 禁止在非赋值或条件语句中使用 new 操作符
    "no-new": 0,
  }
}
