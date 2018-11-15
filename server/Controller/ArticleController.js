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
}
export default new ArticleController()