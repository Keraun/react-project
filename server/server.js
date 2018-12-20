const Koa = require("koa");
const path = require("path");
const cors = require("@koa/cors");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");

const errorMiddleware = require("./middlewares/error");
const mock = require("./middlewares/mock");
const removePrefix = require("./middlewares/remove-prefix");

const router = require("./router/index");

const { baseURL, isMock } = require("../config");

const app = new Koa();

app.env = process.env.NODE_ENV || "development";

app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(errorMiddleware(app));
app.use(mock(isMock));
app.use(removePrefix(baseURL));
app.use(serve(path.join(__dirname, "../app/build"), { gzip: true }));
app.use(router.routes());
app.use(router.allowedMethods());

/* eslint-disable no-console */
app.listen(8080, () =>
  console.log(`server listening on 8080. NODE_ENV is ${app.env}`)
);
