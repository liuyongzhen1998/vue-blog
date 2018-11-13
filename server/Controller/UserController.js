// const login = async ctx=>{
//
// }
// export default {
//  login
// }

//这是以前我们的写法，通常我们都把处理过程写成函数，直接暴露函数即可。
//以后，我们在写方法的时候，直接使用ES6 class 类


class UserController{
    //登陆的处理逻辑
    async login(ctx){
        console.log(ctx.request.body)
        //验证用户名密码是否合法

        //检查用户名收否存在

        //检查密码是否正确

        //生成token

        //最后返回token

    }
}

export default new UserController()