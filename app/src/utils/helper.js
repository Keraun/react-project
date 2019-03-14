// 是否是线上环境
export const isProduction = function() {
  return process.env.NODE_ENV === 'production'
}

export const isTest = function() {
  return process.env.NODE_ENV === 'test'
}

export const getProcessEnv = function() {
  return process.env.NODE_ENV
}

export const getUrlParams = function() {
  return helper.parseUrl(window.location.href)
}

export const parseUrl = function(url = '') {
  const tmp = {}
  let match = url.match(/\?[^#]*/)
  if (!match || match[0].length === 1) {
    return tmp
  }
  const paramArr = match[0].slice(1).split('&')
  paramArr.forEach(item => {
    match = item.split('=')
    const key = match[0]
    const value = decodeURIComponent(match[1] || '')
    tmp[key] = value
  })
  return tmp
}

export const queryString = function(name) {
  const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i')
  return reg.test(window.location.href) ? decodeURIComponent(RegExp.$2.replace(/\+/g, ' ')) : ''
}

export const typeOf = function(o) {
  if (Number.isNaN(o)) return 'NaN'
  const type = Object.prototype.toString.call(o)
  const reg = / (\w+)]/g
  return reg.exec(type)[1].toLowerCase() // tostring会以[object Null]的形式返回，通过正则取null这个字符
}

export const isJSON = function(obj) {
  return (
    typeof obj === 'object' &&
    Object.prototype.toString.call(obj).toLowerCase() === '[object object]' &&
    !obj.length
  )
}

export const stringify = function(val) {
  return val === undefined || typeof val === 'function' ? val + '' : JSON.stringify(val)
}

export const deserialize = function(value) {
  if (typeof value !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (e) {
    return value || undefined
  }
}

export const isFunction = function(value) {
  return Object.prototype.toString.call(value).toLowerCase() === '[object function]'
}

export const isArray = function(value) {
  return value instanceof Array
}

const helper = {
  getUrlParams,
  parseUrl,
  isProduction,
  isTest,
  getProcessEnv,
  queryString,
  typeOf,
  isJSON,
  stringify,
  deserialize,
  isFunction,
  isArray,
}

export default helper
