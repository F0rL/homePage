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
    box-sizing: border-box;
    height: 100%;
    width: 100px;
    flex-shrink: 0;
    overflow: hidden;
  }
}
</style>
