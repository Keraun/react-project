const Router = require('koa-router')
const proxy = require('koa-proxy')
const convert = require('koa-convert')

// const home = require('../controllers/home')
const customRouter = require('./router')
const { proxyPrefixs, host } = require('../../config')

const router = new Router()
router
  .use(customRouter.routes())
  .use(proxyPrefixs, async (ctx, next) => convert(proxy({ host }))(ctx, next))
// .all("*", home);

module.exports = router
