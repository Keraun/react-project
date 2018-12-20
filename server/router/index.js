const Router = require("koa-router");
const proxy = require("koa-proxy");
const convert = require("koa-convert");

const home = require("../controllers/home");
const customRouter = require("./router");
const { proxyPrefixs, host } = require("../../config");

const router = new Router();

router
  .use(customRouter.routes())
  .use(proxyPrefixs, async (ctx, next) => convert(proxy({ host }))(ctx, next))
  .all("*", async (ctx, next) => {
    ctx.status = 404;
    ctx.body = "Not Found";
    ctx.app.emit("error", {}, ctx);
  });

module.exports = router;
