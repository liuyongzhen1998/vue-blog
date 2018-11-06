import koa from 'koa'
const app = new koa()
app.listen(3000,()=>{
    console.log('node is ok 端口在3000')
})

console.log("1")