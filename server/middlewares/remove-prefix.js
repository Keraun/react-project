// 清理 baseURI 路径
function removePrefix(path, prefix) {
  let pathname = path
  if (prefix) {
    pathname = path.replace(new RegExp(`^${prefix}`), '')
  }
  return pathname
}

module.exports = function removePre(prefix) {
  return async (ctx, next) => {
    ctx.path = removePrefix(ctx.path, prefix)
    await next()
  }
}
