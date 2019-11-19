<template>
  <div class="blog-list-wrapper">
    <!-- <h1>文章列表</h1> -->
    <x-list v-if="blogList" :data="blogList" :goto="1" />
    <p v-if="!blogList">没有内容</p>
  </div>
</template>

<script>
import xList from '../common/xList'
export default {
  name: 'BlogDraftList',
  data() {
    return {
      blogList: null
    }
  },
  mounted() {
    this.$http.get('/blog/drafts/list').then(res => {
      this.blogList = res.data.blogList
    })
  },
  components: {
    xList
  }
}
</script>

<style scoped lang="scss">
.blog-list-wrapper {
  width: 100%;
  padding: 20px;
  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
  }
  .blog-list-item {
    width: 100%;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    transition: all 0.3s linear;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgb(108, 133, 127);
      box-shadow: 0 15px 30px 0 rgba(83, 216, 216, 0.1);
    }
    .blog-header {
      display: flex;
      align-items: center;
      position: relative;
      &::before {
        display: block;
        content: '';
        width: 10%;
        border-top: 1px solid #ccc;
      }
      &::after {
        display: block;
        content: '';
        border-top: 1px solid #ccc;
        flex: 1;
      }
      article {
        font-size: 24px;
        font-weight: 600;
        margin-left: 20px;
      }
      span {
        margin-left: 20px;
        font-size: 14px;
        margin-right: 20px;
      }
    }
    .blog-content {
      margin-top: 20px;
      font-size: 18px;
    }
    .blog-more {
      margin-top: 20px;
      display: flex;
      font-size: 14px;
      font-weight: 500;
      > span {
        color: rgb(183, 30, 215);
        &::after {
          content: '·';
          color: rgb(178, 186, 194);
          margin: 0px 0.4em;
          font-weight: 6000;
        }
      }
      .blog-author {
        color: #aaa;
      }
    }
  }
}
</style>
