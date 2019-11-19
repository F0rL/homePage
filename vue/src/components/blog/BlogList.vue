<template>
  <div class="blog-list-wrapper">
    <!-- <h1>文章列表</h1> -->
    <x-list v-if="blogList" :data="blogList" />
    <p v-if="!blogList">没有内容</p>
  </div>
</template>

<script>
import xList from '../common/xList'
export default {
  name: 'BlogList',
  data() {
    return {
      blogList: null
    }
  },
  mounted() {
    const msg = this.$route.path
    console.log(msg)
    this.$http.get('/blog/bloglist').then(res => {
      console.log(res.data)
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
}
</style>
