<template>
  <div class="blog-list-wrapper">
    <x-list v-if="blogList" :data="blogList" :viewType="1"/>
    <p v-if="!blogList">没有内容</p>
  </div>
</template>

<script>
import xList from '../common/xList'
export default {
  name: 'BlogUserList',
  data() {
    return {
      blogList: null
    }
  },
  mounted() {
    this.$http.get('/blog/artical/list').then(res => {
      console.log(res.data)
      this.blogList = res.data.userBlogList
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
}
</style>
