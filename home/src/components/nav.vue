<template>
       <div class="cont">
         <ul>
           <li>首页</li>
           <li>关于</li>
           <li>个人简历</li>
           <li>GitHub</li>
         </ul>
         <div class="leave">
            <p>联系我</p>
           <input v-model="Form.comment" type="text">
           <button @click="submit(Form)">提交</button>
         </div>
       </div>
</template>

<script>

  import request from '../utils/request'
  export default {
    name: "nava",
    data() {
      return {
        Form:{
          comment:null,
        }
      }
    },
    methods: {
      submit(Form) {
        if(Form.comment != null){
          request({
            url: `/comment`,
            method: "post",
            data: this.Form
          }).then(res => {
            this.$message({
              message: '留言成功',
              type: 'success'
            });
          }).catch(err => {
            console.log(err)
          })
        }else{
            this.$message.error('不能为空');
        }
      }
    }
  }
</script>


<style>

  .cont{
    font-family: "Merriweather", serif;
    padding: 5px 10px;
    height: 400px;
    background: #282823;
    color: #fff;
    font-size:18px;
    font-weight: 100;
  }
  .cont h1{
    text-align: center;
  }
  .cont ul{
    padding: 20px 10px;
    list-style: none;
    counter-reset: item;
  }
  .cont ul li{
    line-height: 30px;
    color: #B8B8B8;
    display: list-item;
  }
  .cont ul li:before {
    display: block;
    float: right;
    padding-right: 4%;
    padding-left: 5px;
    vertical-align: bottom;
    color: #B8B8B8;
    content: counter(item, lower-roman);
    counter-increment: item;
  }
  .cont ul li:hover {
    background: rgba(0,0,0,0.9);
    cursor:pointer;
  }
  .leave{
    text-align: center;
    margin: 0 auto;
    width: 160px;
    height: 200px;
  }
  .leave p{
    font-size: 22px;
    padding: 10px 0;
  }
    .leave input{
      border-radius: 5px;
      width: 100%;
      height: 30px;
      font-size: 18px;
      /*background: ;*/
      border: 1px solid #fff;
      outline:none;
      padding: 0 2px;
    }
  button{
    margin-top: 10px;
    width: 80px;
    height: 30px;
    background: #EFF4F7;
    border-radius: 5px;
  }

</style>
