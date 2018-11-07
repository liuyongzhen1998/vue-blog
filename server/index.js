import koa from 'koa'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
//引入路由文件
import router from './routes/index'
//引入数据库连接文件
import query from './utils/query'

const app = new koa()
app.use(bodyParser())
app.use(router.routes())
// app.use(cors()).use(bodyParser()).use(router.routes())

app.listen(3000,()=>{
    console.log('node is ok 端口在3000')
})