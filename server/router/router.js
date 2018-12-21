const Router = require('koa-router')
const router = new Router()
// demo 使用
router.post('/user/info', require('../controllers/user/info'))

module.exports = router
