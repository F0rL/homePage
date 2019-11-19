<template>
  <div class="blog-list-wrapper">
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
}
</style>
