/* config-overrides.js */
const rewireLess = require('react-app-rewire-less')

const path = require('path')

module.exports = function override(conf, env) {
  let config = Object.assign({}, conf)
  config.resolve.plugins = deleteModuleScope(config.resolve.plugins)
  config = rewireLess(config, env)
  config.resolve.alias = {
    '@': resolve('src'),
    '@common': resolve('src/common'),
    '@lib': resolve('src/lib'),
    '@images': resolve('src/images'),
    '@components': resolve('src/components'),
    '@pages': resolve('src/pages'),
    '@utils': resolve('src/utils'),
    '@styles': resolve('src/styles'),
  }
  // config.devtool = false; // 关掉 sourceMap
  return config
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

function deleteModuleScope(plugins = []) {
  const index = plugins.findIndex(item => {
    return item.hasOwnProperty('appSrcs') && item.hasOwnProperty('allowedFiles')
  })
  plugins.splice(index, 1)
  return plugins
}
