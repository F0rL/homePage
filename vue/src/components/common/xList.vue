<template>
  <ul class="x-list">
    <li v-for="item in data" :key="item.id" class="blog-list-item" @click="toView(item.id)">
      <div class="blog-header">
        <article>{{item.title}}</article>
        <span>{{item.updated_at | formatDate}}</span>
      </div>
      <!-- <markdown-viewer :value="item.content" /> -->
      <ul class="blog-more">
        <span>文章</span>
        <li class="blog-author">
          <span>{{item.nickname}}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import MarkdownViewer from '../common/MarkdownEditor/MarkdownViewer'
export default {
  name: 'XList',
  props: {
    data: {
      type: Array,
      default: []
    },
    goto: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toView(id) {
      if (this.goto === 1) {
        console.log('defa')
      } else {
        this.$router.push(`/blog/article/${id}`)
      }
    }
  },
  components: {
    MarkdownViewer
  }
}
</script>

<style scoped lang="scss">
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
</style>
