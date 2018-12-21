const colors = require("colors");
// 统一错误处理
// 本地开发环境下不捕获错误
module.exports = app => {
  const isDev = app.env === "development";

  if (!isDev) {
    app.on("error", (err, ctx) => {
      /* eslint-disable */
      const message = `
        ${err.message || "unknown error"}
        uncaughtException, at ${new Date().toISOString()}
        ${ctx.method} ${ctx.url}
      `;
      /* eslint-enable */
      const logErr = new Error(message);
      ctx.log = logErr;
      console.log(colors.red(logErr));
    });
  }

  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 使用上文的方法处理error
      ctx.app.emit("error", err, ctx);
      const { code = 500, message = "" } = err;
      ctx.status = code;
      ctx.body = message;
    }
  };
};
