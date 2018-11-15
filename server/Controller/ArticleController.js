import Article from '../models/ArticleModel'
class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
}
export default new ArticleController()