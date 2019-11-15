<template>
  <div class="blog-edit">
    <div class="edit-header">
      <input class="blog-title" v-model="title" placeholder="请输入标题"/>
      <div class="btn-wrapper">
        <x-icon name="daohang"></x-icon>
        <span @click="publish">发布</span>
      </div>
    </div>
    <div class="editor-container">
      <markdown-editor v-model="content" height="100%" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '../common/MarkdownEditor/index'
import xIcon from '../common/xIcon'

export default {
  name: 'BlogEditor',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    publish() {
      console.log('发布');
    }
  },
  components: {
    MarkdownEditor,
    xIcon
  }
}
</script>

<style scoped lang="scss">
.blog-edit {
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  .edit-header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .blog-title {
      width: 80%;
      font-size: 26px;
      border: none;
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .editor-container {
    flex: 1;
  }
}
</style>
