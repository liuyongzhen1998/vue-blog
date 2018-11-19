import Router from 'koa-router'

const router = new Router()
import UserController from "../Controller/UserController"
import ArticleController from '../Controller/ArticleController'
import checkTOken from '../utils/checkToken'


    router.get('/',async ctx=>{
    ctx.body = `
        <h1 align="center">欢迎使用vue-blog接口测试服务器</h1>
    `
})
// router.prefix(`${base_API}`)

router.post('/api/login',UserController.login)

// 推出
router.get('/api/logout',checkTOken,UserController.logout)
//获取所以文章
router.get('/api/articles',checkTOken,ArticleController.getArticles)
//添加新文章
router.post('/api/articles/add',checkTOken,ArticleController.addArticles)
//查询一下最新发布的那片文章的详细信息
router.get('/api/articles/:id',checkTOken,ArticleController.getOneArticles)

router.post('/api/articles/update/:id',checkTOken,ArticleController.UpdataArticles)


export default router