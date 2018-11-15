// const login = async ctx=>{
//
// }
// export default {
//  login
// }

//这是以前我们的写法，通常我们都把处理过程写成函数，直接暴露函数即可。
//以后，我们在写方法的时候，直接使用ES6 class 类

import Usera from '../models/UserModel'
import md5 from 'md5'
import createToken from "../utils/createToken";
class UserController{
    //登陆的处理逻辑
    async login(ctx){
        // console.log(ctx.request.body)
        let user = ctx.request.body.user
        let password = ctx.request.body.password
        //验证用户名密码是否合法
        //检查用户名收否存在
        //所有操作数据库的操作，不再控制器里面完成，我们吧数据库直接封装方法
        const res = await Usera.getUserByName(user)
        if(res[0] != undefined){
            if(res[0].password === md5(password)){
                let token = createToken(res[0].user)
                ctx.body = {
                    success:true,
                    message: '登陆成功',
                    token:token
                }
            }else{
                ctx.body = {
                    success:false,
                    message: '密码错误',
                }
            }
        }else{
            ctx.body = {
                success:false,
                message:'用户名不存在，请重新填写'
            }
        }
        //检查密码是否正确

        //生成token

        //最后返回token

    }
    async logout(ctx){
        ctx.body = {
            success:true,
            message:'退出成功'
        }
    }

}

export default new UserController()