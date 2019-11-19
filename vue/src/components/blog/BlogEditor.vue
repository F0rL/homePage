<template>
  <div class="blog-edit">
    <div class="edit-header">
      <input class="blog-title" v-model="title" placeholder="请输入标题" />
      <div class="btn-wrapper">
        <span>{{updateMsg}}</span>
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
  name: 'BlogNew',
  data() {
    return {
      title: '',
      content: '',
      timer: null,
      updateStatus: null
    }
  },
  mounted(){
    this.getDraft()
  },
  computed: {
    updateMsg() {
      return this.updateStatus ? '正在上传' : '已上传成功'
    }
  },
  props: ['blogId'],
  watch: {
    title(val) {
      this.debounceUpdate()
    },
    content(val) {
      this.debounceUpdate()
    }
  },
  methods: {
    getDraft(){
      this.$http.get(`/blog/drafts`, {
        params: {
          blogId: this.blogId
        }
      }).then((res) => {
        const data = res.data
        this.title = data.title
        this.content = data.content
      })
    },
    publish() {
      this.$http.post('/blog/publish', {
        title: this.title,
        content: this.content,
        blogId: this.blogId
      }).then(() => {
        console.log('发布')
        this.$router.push('/blog/list')
      })
    },
    updateArtical() {
      console.log(this.title, this.content, this.blogId)
      this.$http
        .post('/blog/drafts/update', {
          title: this.title,
          content: this.content,
          blogId: this.blogId
        })
        .then(() => {
          this.updateStatus = false
        })
        .catch(() => {
          this.updateMsg = '网络错误'
        })
    },
    debounceUpdate() {
      this.updateStatus = true
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.updateArtical()
      }, 2000)
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
