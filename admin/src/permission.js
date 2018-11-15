import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth";

//创建白名单 那些页面不需要权限
const whiteList = ['/login']
//设置页面在跳转之前的一些权限判断操作
//to即将要跳转页面，form是当前所在的页面，next是判断之后 必须调用next才可以进行下一步的操作
router.beforeEach((to,from,next)=>{
  //开启进度条
  NProgress.start()
  if(getToken()){
    //如果有token值
    if(to.path==='/login'){
      next({path:'list'})
      NProgress.done();  //进度条结束
    }else{
      next()//正常页面跳转
    }
  }else{
    //没有token值情况
    if(whiteList.indexOf(to.path) !== -1){
      next()
    }else{
     next({path:'/login'})
      NProgress.done()
    }
  }
})

router.afterEach(()=>{
  NProgress.done()
})
