const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const port = require("../config").mockPort;

const app = new Koa();

app.use(bodyparser());

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (e) {
    console.log(e);
    this.body = e;
  }
});

app.use(async function(ctx, next) {
  let moduleName = this.query.apiName || this.request.body.apiName;
  if (moduleName) {
    let modulePath = "../__mock__/" + moduleName;
    require.cache[require.resolve(modulePath)] &&
      delete require.cache[require.resolve(modulePath)];
    let _method = require(modulePath);
    let data = _method(this.query.apiName ? this.query : this.request.body);
    this.body = data;
  }
});

app.listen(port, function() {
  console.log("mock server running");
});
