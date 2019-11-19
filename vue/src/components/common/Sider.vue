<template>
  <div class="sider">
    <div class="user" @click="toLogin" v-if="!userInfo">
      <p>未登录</p>
    </div>
    <div class="user" v-if="userInfo">
      <p>用户ID</p>
      <p>{{userInfo.nickname}}</p>
      <p @click="logout">登出</p>
    </div>
    <router-link to="/blog/list">所有博客</router-link>
    <router-link to="/blog/userlist">用户列表</router-link>
    <router-link to="/blog/draft">草稿列表</router-link>
    <a @click="newDrafts">新建文章</a>
  </div>
</template>

<script>
import { getToken, clearToken } from '../../utils/localStorage'
import SiderItem from './SiderItem'
export default {
  name: 'Sider',
  data() {
    return {
      userInfo: null
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    newDrafts(){
      console.log('new')
      this.$http.post('/blog/drafts/new').then(res => {
        this.$router.push(`/blog/new/${res.data.msg.id}`)
      }).catch(err => {
        console.log(err);
      })
    },
    getUserInfo() {
      const token = getToken()
      if (token) {
        this.$http
          .post('/token/user', {
            token
          })
          .then(res => {
            this.userInfo = res.data.userInfo || null
          })
      }
    },
    toLogin() {
      this.$router.push('/user/login')
    },
    logout(){
      this.userInfo = null
      clearToken()
    }
  },
  components: {
    SiderItem
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.sider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
</style>
