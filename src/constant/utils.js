import Vue from 'vue'
export const debug = (...a) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(...a)
  }
}
export const assertType = (value, type) => {
  let valid = false
  if (type === String) {
    valid = typeof value === 'string'
  } else if (type === Number) {
    valid = typeof value === 'number'
  } else if (type === Boolean) {
    valid = typeof value === 'boolean'
  } else if (type === Function) {
    valid = typeof value === 'function'
  } else if (type === Object) {
    valid = Vue.util.isPlainObject(value)
  } else if (type === Array) {
    valid = Array.isArray(value)
  } else {
    valid = value instanceof type
  }
  return valid
}
