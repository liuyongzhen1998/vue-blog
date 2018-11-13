import Router from 'koa-router'

const router = new Router()
import UserController from "../Controller/UserController"

router.get('/',async ctx=>{
    ctx.body = `
        <h1 align="center">欢迎使用vue-blog接口测试服务器</h1>
    `
})

// router.prefix(`${base_API}`)

router.post('/api/login',UserController.login)
export default router