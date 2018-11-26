<template>
    <main>
      <article v-for="(articles,index) in article">
        <header class="article_title"><h2>{{articles.title}}</h2></header>
        <section class="content">
          <h3>{{articles.content}}</h3>
        </section>
        <p class="head_img">
          <img src="../assets/dl.png" alt="">
          <span v-for="(tag,index) in articles.tags.split(',')">{{tag}}</span>
          <span>{{articles.createTime}}</span>
        </p>

      </article>
    </main>

</template>



<script>
  import request from '../utils/request'
  import moment from 'moment'
  export default {
      name: "index",
      data() {
        return {
          article: [],
        }
      },
      created(){
        request({
          method:'get',
          url:'/article/list',
        }).then(res=>{
          this.article = res.data
          this.article.forEach(function(value){
            value.createTime =  moment(value.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
          })
        }).catch(err=>{
          console.log(err)
        })
      }
    }
</script>



<style>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  *{
    margin: 0;
    padding: 0;
  }
  article{
    color: #4A4A4A;
    margin: 50px auto;
    width: 80%;
  }
  .header{
    text-align: center;
    background: #F2F6F9;
    padding: 100px 0;
    width: 100%;
  }
  .title_name{
    font-size: 0.4rem;
    font-family: "Merriweather", serif;
  }
  .page-description{
    font-size: 0.2rem;
    font-weight: 400;
    font-family: "Merriweather", serif;
    letter-spacing: 0.01rem;
    color: rgba(0,0,0,0.5);
  }
  .article_title h2{
    text-align: left;
    font-size: 0.2rem;
    font-family: "Merriweather", serif;
    padding: 10px 60px;
  }
  .content{
    width: 90%;
    text-align: left;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin: 0 auto;
  }
  .content h3{
    font-size: 0.1rem;
    padding: 0px 60px;
    font-family: "Merriweather", serif;
  }
  .head_img{
    padding: 5px 0;
    margin: 0 auto;
    width: 90%;
    font-size: 0;
  }
  .head_img img{
    width: 30px;
    vertical-align: middle
  }
  .head_img span{
    color: #ccc;
    font-size: 10px;
    margin: 0 2px;
    padding: 0 2px;
    vertical-align: middle
  }
</style>
