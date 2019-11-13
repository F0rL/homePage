<template>
  <div class="sider">
    <div class="user" v-if="!userInfo">
      <p>未登录</p>
    </div>
    <div class="user" v-if="userInfo">
      <p>用户ID</p>
      <p>{{userInfo.nickname}}</p>
    </div>
  </div>
</template>

<script>
import { getToken } from '../../utils/localStorage'
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
    getUserInfo() {
      const token = getToken()
      if (token) {
        this.$http.post('/token/user', {
          token
        }).then(res => {
          this.userInfo = res.data.userInfo
        })
      }
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
  padding: 20px 5px;
  width: 100%;
}
</style>
