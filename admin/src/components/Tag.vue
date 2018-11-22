<template>
  <div style="height: 100%">
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="list-container main">
      <h2>
        标签筛选 /
        <span>ARTICLE LIST</span>
      </h2>
      <hr>
     <h1>标签</h1>
      <ul class="tags">
        <li v-for="tag in tagss">
          <a href="javascript:void(0)" @click="goAnchor(tag.id)">{{ tag }}</a>
        </li>
      </ul>
    </div>
  </div>




</template>

<script>
  /**
   * @author
   * @file 标签管理组件
   * */
  import ArticleList from '@/components/common/ArticleList'
  import Editor from  '@/components/common/Editor'
  import Aside from  '@/components/common/Aside'
  import HeadNav from '@/components/common/HeadNav'
  import request from '@/utils/request'

  import moment from 'moment'
  moment.locale('zh-CN')
  export default {
    data() {
      return {
        introductions: {},
        tagss: []
      }
    },
    // 计算属性
    computed:{
    },
    components:{
      ArticleList,
      Editor,
      Aside,
      HeadNav
    },
    created() {
      request({
        method:'get',
        url:'/get/tags',
      }).then(res=>{
        let arra = [];
        let b = null;
        //接收数据库数据进行循环遍历
        res.forEach(function(value,index){
          //把循环出来的数据存到数组里面
          arra.push(value.tags)
        });
        //因为数组里面包含了字符串  所以全部转字符串
          b = arra.join(',')
        //然后切割成数组
         this.tagss = b.split(',')
      }).catch(err=>{
        console.log(err)
      })
    },
    methods: {
      goAnchor(id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" type="scss" lang="scss" scoped>
  @import "../assets/style/variable";
  .list-container {
    .tags {
      padding: 0;
      list-style: none;
      li {
        display: inline;
        margin-right: 0.3em;
      }
    }

    .tag-list {
      padding: 0;
      list-style: none;
      li {
        margin: 0.8em 0;
      }
    }

    a {
      margin: 0 1em 1em 0;
      padding: 0.3em;
      color: #f18f01;
      border-radius: 2px;
      border: 1px solid #f18f01;
      cursor: pointer;
    }
  }
</style>
