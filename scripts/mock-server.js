const Koa = require("koa");
const path = require("path");
const bodyparser = require("koa-bodyparser");
const cors = require("@koa/cors");
const logger = require("koa-logger");

const port = process.env.mockPort || 8989;

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyparser());

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (e) {
    console.log(e);
    ctx.body = e;
  }
});

app.use(async function(ctx, next) {
  const { request } = ctx;
  let moduleName = request.query.apiName || request.body.apiName;
  if (moduleName) {
    console.log(`\t\n mock api moduleName: ${moduleName}\n`);
    let modulePath = path.join(process.cwd(), "./__mock__/" + moduleName);
    require.cache[require.resolve(modulePath)] &&
      delete require.cache[require.resolve(modulePath)];

    let _method = require(modulePath);

    let data =
      typeof _method === "function"
        ? _method(ctx.query.apiName ? ctx.query : ctx.request.body)
        : _method;
    ctx.body = data;
  }
  next();
});

app.listen(port, function() {
  console.log(`\t\n mock server running on locahost:${port}`);
});
