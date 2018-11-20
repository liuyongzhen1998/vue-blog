import query from '../utils/query'
import eacape from '../utils/eacape'
class ArticleModel {
    async getAllArticles(){
        return await query((`SELECT * FROM ARTICLE ORDER BY createTime DESC`))
    }
    async addArticle(){
        return await query(`INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''`)
    }
    async getOneArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE ID=${id}`)
    }
    async updateArticle(id,{title,tags,content,isPublished}){
        return await query(eacape`UPDATE ARTICLE SET title=${title},tags=${tags},content=${content} WHERE id=${id}`)
        // console.log(`UPDATE ARTICLE SET title='${title}',tags='${tags}',content='${content}' WHERE id='${id}'`)
    }
    async deleteArticles(id){
        return await query(eacape `DELETE FROM ARTICLE WHERE id=${id}`)
    }
    async publishArticles(id){
        return await query(eacape `UPDATE ARTICLE SET publishTime=NOW(),isPublished=1 WHERE id=${id}`)
    }
}
export default new ArticleModel()