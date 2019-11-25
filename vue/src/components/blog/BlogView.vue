<template>
  <div class="blog-artical" v-if="data">
    <div class="blog-content">
      <div class="blog-header">
        <h1 class="blog-title">{{data.title}}</h1>
        <p class="blog-author">
          <span>{{data.nickname}}</span>
          <span>{{data.updated_at | formatDate}}</span>
        </p>
      </div>
      <markdown-viewer :value="data.content" />
    </div>
  </div>
</template>

<script>
import MarkdownViewer from '../common/MarkdownEditor/MarkdownViewer'
export default {
  name: 'BlogView',
  data() {
    return {
      data: null
    }
  },
  props: {
    blogId: {
      type: String
    }
  },
  mounted() {
    this.getArtical()
  },
  methods: {
    getArtical() {
      this.$http('/blog/artical', {
        params: {
          blogId: this.blogId
        }
      })
        .then(res => {
          this.data = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    MarkdownViewer
  }
}
</script>

<style scoped lang="scss">
.blog-artical {
  padding: 20px 40px;
  width: 100%;
  position: relative;
  .blog-content {
    max-width: 914px;
    margin: 0 auto;
    .blog-header {
      .blog-title {
        font-size: 30px;
        font-weight: 600;
        text-align: center;
      }
      .blog-author {
        font-size: 14px;
        text-align: center;
        margin-top: 1em;
        margin-bottom: 1em;
        span:first-child {
          margin-right: 1em;
        }
      }
    }
  }
}
</style>
