const path = require("path");
// 加载mock file
module.exports = (isMock = false) => {
  if (!isMock) {
    return async (ctx, next) => {
      await next();
    };
  }

  console.warn(`\n mock server running`);

  return async (ctx, next) => {
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
  };
};
