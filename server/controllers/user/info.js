module.exports = async ctx => {
  ctx.body = {
    code: 1,
    error: '自定义 controllers 拦截',
    data: { info: 'node 层测试接口，故意报错。' },
  }
}
