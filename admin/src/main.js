// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//将状态管理的文件引入进来
import store from '@/store'
//将图表库的js文件引入进来
// import '@/assets/image/icon/iconfont'
//将全局的样式引入进来
import '@/assets/style/index.scss'
// 项目中 vue里面的插件都在main.js入口文件中引入
// 引入表单验证插件 验证用户名密码
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import Notifications from 'vue-notification'
Vue.use(Notifications)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
