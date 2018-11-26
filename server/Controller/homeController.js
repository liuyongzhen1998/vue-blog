import Article from '../models/homeModel'
class homeController {
    async ShowArticle(ctx){
        ctx.body = await Article.article()
    }
    async comment(ctx){
        ctx.body = await Article.comment(ctx.request.body.comment)
        ctx.status = 200
    }

}
export default new homeController()