<template>
  <ul class="x-list">
    <li v-for="item in data" :key="item.id" class="blog-list-item">
      <div class="blog-header">
        <article>{{item.title}}</article>
      </div>
      <!-- <markdown-viewer :value="item.content" /> -->
      <ul class="blog-more">
        <li>
          <x-icon name="shezhi"></x-icon>
          <span class="blog-info">发表于： {{item.updated_at | formatDate}}</span>
        </li>
        <li>
          <x-icon name="shezhi"></x-icon>
          <span class="blog-info">分类： 文章</span>
        </li>
        <li>
          <x-icon name="shezhi"></x-icon>
          <span class="blog-info">阅读次数： 100</span>
        </li>
        <li>
          <x-icon name="shezhi"></x-icon>
          <span class="blog-info">标签： JavaScript</span>
        </li>
        <li v-if="item.nickname">
          <x-icon name="shezhi"></x-icon>
          <span class="blog-info">作者： {{item.nickname}}</span>
        </li>
      </ul>
      <div class="read-more">
        <div @click="toView(item.id)" v-if="viewType === 0">阅读</div>
        <div @click="toDraft(item.id)" v-if="viewType !== 0">编辑</div>
        <div @click="deleteArticle(item.id)" v-if="viewType !== 0">删除</div>
      </div>
    </li>
  </ul>
</template>

<script>
import MarkdownViewer from '../common/MarkdownEditor/MarkdownViewer'
import xIcon from './xIcon'

export default {
  name: 'XList',
  inject:['reload'],
  props: {
    data: {
      type: Array,
      default: []
    },
    viewType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toView(id) {
      this.$router.push(`/blog/article/${id}`)
    },
    async toDraft(id) {
      if (this.viewType === 1) {
        const msg = await this.$http.get('/blog/artical', {
          params: {
            blogId: id
          }
        })
        this.$http.post('/blog/drafts/new', {
          publishId: msg.data.id,
          content: msg.data.content,
          title: msg.data.title
        }).then(res => {
          this.$router.push(`/blog/new/${res.data.msg.id}`)
        })
      } else {
        this.$router.push(`/blog/new/${id}`)
      }
    },
    deleteArticle(id) {
      if (confirm('确认删除？')) {
        this.$http
          .post('/blog/delete', {
            blogId: id
          })
          .then(res => {
            this.reload()
            console.log(res)
          })
      }
    }
  },
  components: {
    MarkdownViewer,
    xIcon
  }
}
</script>

<style scoped lang="scss">
.x-list {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(87, 125, 207);
  }
  .blog-list-item {
    width: 914px;
    flex-grow: 0;
    /* padding: 20px; */
    margin-top: 20px;
    transition: all 0.3s linear;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px #eee;
    .blog-header {
      margin-top: 20px;
      text-align: center;
      article {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 2px;
      }
    }
    .blog-more {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-size: 14px;
      font-weight: 500;
      > li {
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        &:not(:last-child) {
          &::after {
            display: inline-block;
            content: '|';
            margin: 0px 0.4em;
            font-weight: 6000;
          }
        }
        > .blog-info {
          margin-left: 4px;
        }
      }
    }
    .read-more {
      display: flex;
      justify-content: center;
      div {
        font-size: 14px;
        margin: 20px auto;
        text-align: center;
        padding: 6px 22px;
        border: 1px solid #ccc;
        box-shadow: 0 0 2px 2px #ccc;
        cursor: pointer;
        border-radius: 8px;
        &:hover {
          background-color: #666;
          color: #fff;
        }
      }
    }
  }
}
</style>
