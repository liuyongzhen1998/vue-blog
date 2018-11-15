import jwt from 'jsonwebtoken'
import { secret } from "../config";

export default async function( ctx, next ){
  const XToken = ctx.get('X-Token');
  let tokenContent;
  try {
      tokenContent = await jwt.verify(XToken,secret);     //如果token过期或验证失败，将抛出错误
      await next();
  }catch(err){
      if(err.message == 'jwt expired'){
          ctx.body = {
              code: 40001,
              message: "token已过期，请从新登陆"
          }
      }else{
          console.log(err);
          // ctx.throw(500)
      }

  }
}
