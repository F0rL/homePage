<template>
  <div class="sider">
    <div class="user user-login" @click="toLogin" v-if="!userInfo">
      <p>未登录</p>
    </div>
    <div class="user-info" v-if="userInfo">
      <div class="user-avatar">
        <img src="https://iph.href.lu/100x100?text=%E5%A4%B4%E5%83%8F" alt />
      </div>
      <span>{{userInfo.nickname}}</span>
      <span @click="logout">登出</span>
    </div>
    <router-link to="/home" >返回首页</router-link>
    <router-link to="/blog/list" active-class="link-active">所有博客</router-link>
    <router-link to="/blog/userlist" active-class="link-active">用户列表</router-link>
    <router-link to="/blog/draft" active-class="link-active">草稿列表</router-link>
    <a @click.prevent="newDrafts">新建文章</a>
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
    newDrafts() {
      console.log('new')
      this.$http
        .post('/blog/drafts/new')
        .then(res => {
          this.$router.push(`/blog/new/${res.data.msg.id}`)
        })
        .catch(err => {
          console.log(err)
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
    logout() {
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
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #666;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  .user-login {
    text-align: center;
    width: 100%;
    padding: 10px 20px;
    color: #fff;
    background: rgb(243, 28, 28);
    cursor: pointer;
  }
  .user-info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    .user-avatar {
      img {
        width: 80px;
        border-radius: 50px;
      }
    }
    span {
      color: #fff;
      margin-top: 8px;
      &:nth-child(3) {
        cursor: pointer;
      }
    }
  }
  > a {
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    padding: 20px 0;
    cursor: pointer;
  }
  .link-active {
    background: red;
  }
}
</style>
