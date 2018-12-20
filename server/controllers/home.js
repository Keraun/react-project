const path = require("path");
const fs = require("fs");
// 兜底操作，非法路径返回index.html
module.exports = async (ctx, next) => {
  ctx.type = "html";
  ctx.body = await fs.createReadStream(
    path.join(process.cwd(), "app/build", "index.html")
  );
  await next();
};
