/* config-overrides.js */
const rewireLess = require("react-app-rewire-less");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config.resolve.alias = {
    "@": resolve("src"),
    lib: resolve("src/lib"),
    images: resolve("src/images"),
    components: resolve("src/components"),
    pages: resolve("src/pages"),
    utils: resolve("src/utils"),
    styles: resolve("src/styles")
  };
  return config;
};

function resolve(dir) {
  return path.join(__dirname, dir);
}
