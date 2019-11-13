<template>
  <div class="user">
    <user-sider class="user-sider-wrapper" />
    <router-view></router-view>
  </div>
</template>

<script>
import UserSider from '../components/common/Sider'

export default {
  name: 'User',
  components: {
    UserSider
  }
}
</script>

<style scoped lang="scss">
.user {
  height: 100%;
  display: flex;
  .user-sider-wrapper {
    height: 100%;
    background: rgba(48, 65, 86, 0.6);
    color: rgb(191, 203, 217);
    backdrop-filter: blur(5px);
    width: 100px;
    overflow: hidden;
    transition: width 0.3s ease;
    &.sider-active {
      width: 100px;
    }
  }
}
</style>
