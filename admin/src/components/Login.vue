<template>
    <div class="login-container">
      <header class="login-head">
        <h1>欢迎访问我的博客</h1>
      </header>
      <section class="form">
        <span class="slogan">
          <span>/ Login</span>
        </span>
        <input name="user" v-validate="'required'" type="text" id="user" placeholder="请输入用户名" v-model="LoginForm.user">
        <input name="password" v-validate="'required'" type="password" id="password" placeholder="请输入密码" v-model="LoginForm.password" @keydown.enter="login">
        <button id="login" @click="login">登陆</button>
      </section>
      <footer>Always.</footer>
      <notifications group="user" />
    </div>

</template>

<script>
  import {Validator} from 'vee-validate'
  Validator.localize('en',dict);
  const dict = {
    custom:{
      user:{
        required:'用户名不能为空'
      },
      password: {
        required: ()=> '您的密码不能为空'
      }
    }
  }
  import { setToken } from "../utils/auth";
  import request from '@/utils/request'
  export default {
    name: "Login",
    data(){
      return{
        LoginForm:{
          user:'',
          password:''
        }
      }
    },
    methods:{
      login:function () {
        //首先验证成功失败的结果 如果成功 在进行登陆 如果失败 则进行消息提示
        if(this.errors.items.length === 0){
          request({
            url:'/login',
            method:'post',
            data:this.LoginForm
          }).then(res=>{
            if(res.success){
                let token = res.token;
                setToken(token);
                this.$store.commit('SET_TOKEN',token)
                this.$router.push('/list')
            }else{
              //如果用户名密码不正确给出提示
              this.$notify({
                type:'warn',
                group:'user',
                title:'登陆失败',
                text:res.message
              })
            }
            //要先得到token值 将token存到Cookie里面去
            //跳转博客首页
          }).catch(err=>{
            //错误请求，把错误扔到控制台
          })
        }else{
          this.$notify({
            width:1000,
            type:'warn',
            group:'user',
            title:'验证失败',
            text:this.errors.items[0].msg
          })
        }
      }
    }
  }
</script>

<style lang="scss" type="scss" lang="scss" scoped>
  @import "../assets/style/variable";
  .login-container {
    height: 100%;
    @include flex($flow: column wrap);
    font-family: "KaiShu", "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    .login-head {
      @include flex;
      width: 100%;
      height: 3em;
      font-size: 2rem;
    }

    .form {
      @include flex($flow: column wrap);
      width: 400px;
      height: 250px;
      border-top: 20px solid $base;
      border-radius: 5px;
      // box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, .3);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
      .slogan {
        font-size: 1.6rem;
        margin-bottom: 1em;
        //color: $quote;
        span {
          color: $base;
        }
      }
      input {
        font: {
          size: 1rem;
          family: Dosis, Arial, sans-serif;
        }
        margin-bottom: 2em;
        width: 20em;
        height: 2.5em;
        outline-color: $base;
        border-radius: 3px;
        border: 1px solid #ccc;
      }
      button {
        color: $white;
        font: {
          size: 1.6rem;
          family: KaiShu, Arial, sans-serif;
        }
        width: 6em;
        height: 2em;
        border: none;
        background: $base;
        outline: none;
        cursor: pointer;
      }
    }

    footer {
      height: 4em;
      @include flex;
      justify-self: flex-end;
    }
  }
</style>
