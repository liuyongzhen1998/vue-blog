import {getToken,setToken,removeToken} from "@/utils/auth";

const state = {
  //全局变量
  token:getToken(),//当前登陆状态
  username:'', //当前登陆用户名称
  id:'',//正在编辑文章的id
  title:'',//编辑文章的标题
  tags:'',//编辑文章的列表
  content:'',//编辑文章的内容
  isPublished:'',//文章是否发布
  toggleDelete:false
}

export default state
