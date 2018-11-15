<template>
  <div>
    <ul class="list">
      <li class="article" :class="{active: activeIndex === index, published: isPublished === 1}" v-for="{title, createTime, isPublished, isChosen},index in articleList" @click="select(index)">
        <header>{{ title }}</header>
        <p>{{ createTime }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    import request from '@/utils/request'
    import moment from 'moment'
    import {mapState,mapMutations} from 'vuex'

    export default {
      name: "ArticleList",
      data(){
        return{
          articleList:[],
          activeIndex:-1
        }
      },
      //吧全局的vuex里面的state和Mutations放到计算属性中
      computed:{
        ...mapState(['id','title','tags','content','isPublished'])
      },
      //前组件创建的时候自带执行里面请求
      // 钩子
      created(){
        request({
          method:'get',
          url:'/articles'
        }).then(res=>{
          for (let article of res){
            article.createTime = moment(article.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
            article.isChosen = true
          }
          this.articleList.push(...res)
          //如果查询的文章，则将第一篇文章作文正在编辑的文章
          if(this.articleList.length !== 0){
            this.SET_CURRENT_ARTICLE(this.articleList[0])
            this.activeIndex = 0;
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      methods:{
        updateList(updateId){
          request({
            method: "get",
            url: `/articles/${updateId}`
          }).then(res=>{
            const article = res[0]
            article.createTime = moment(article.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
            article.isChosen = true
            this.articleList.unshift(article)
            //如果发布了新文章，当前文章被选中的文章

            ++ this.activeIndex
          }).catch(err=>{
            console.log(err)
          })
        },
        select(index){
          this.activeIndex = index
          //当前被选中的文章扔到全局状态管理里面
          this.SET_CURRENT_ARTICLE(this.articleList[index])
        },
        ...mapMutations(['SET_CURRENT_ARTICLE'])
      }
    }
</script>
<style lang="scss" type="scss" lang="scss" scoped>
  @import "../../assets/style/variable";
  .article {
    @include flex($flow: column wrap, $align: flex-start);
    padding: 0.2em 0.5em;
    margin-bottom: 1.5em;
    height: 5em;
    max-width: 100%;
    background: $white;
    border: 0.1em solid $special;
    cursor: pointer;
    header {
      max-width: 100%;
      font-size: 1.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.2em;
    }
    p {
      margin: 0;
      color: $special;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .active {
    border: 1px solid $base;
  }

  .published {
    border-right: 4px solid $base;
  }
</style>
