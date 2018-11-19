import query from '../utils/query'

class UserModel{
    async getUserByName(user){
        return await query(`select user,password from user where user = '${user}'`)
        // console.log(`select user,password from user where user = '${user}'`)
    }
}
export default new UserModel()