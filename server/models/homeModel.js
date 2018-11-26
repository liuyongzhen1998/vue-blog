import query from '../utils/query'
class homeModel {
    async article(){
        return await query('select * from ARTICLE')
    }
    async comment(name){
        req
    }
}
export default new homeModel()