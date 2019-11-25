<template>
  <div class="blog">
    <user-sider class="user-sider-wrapper" />
    <router-view />
  </div>
</template>

<script>
import UserSider from '../components/common/Sider'
export default {
  name: 'Blog',
  data() {
    return {}
  },
  components: {
    UserSider
  }
}
</script>

<style scoped lang="scss">
.blog {
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
