// 这里的每一项配置都非常重要，请仔细检查
module.exports = {
  isMock: true,
  //请求的host
  host: "https://baidu.com/",
  // K2 二级路由，Nginx 新增 Location，三者必须一致
  baseURL: "/",
  // 自动转发
  proxyPrefixs: ["/api"]
};
