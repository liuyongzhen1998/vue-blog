import Router from 'koa-router'

const router = new Router()

router.get('/',async ctx=>{
    ctx.body = `
        <h1 align="center">欢迎使用vue-blog接口测试服务器</h1>
    `
})

export default router