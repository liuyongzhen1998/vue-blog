import Article from '../models/ArticleModel'
class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticles(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticles(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
    async UpdataArticles(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticles(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticles(id)
        ctx.body = res
    }
    async publishArticles(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticles(id)
        ctx.body = res
    }
}
export default new ArticleController()