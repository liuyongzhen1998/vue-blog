import query from '../utils/query'
import eacape from '../utils/eacape'
class ArticleModel {
    async selTags(){
        return await query(`select tags from ARTICLE where tags is not null`)
    }
}
export default new ArticleModel()