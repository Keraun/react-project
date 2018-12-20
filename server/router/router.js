const Router = require("koa-router");
const { baseURL } = require("../../config");
const router = new Router({ prefix: baseURL });

// demo 使用
router.post("/test/info", require("../controllers/test/info"));

module.exports = router;
