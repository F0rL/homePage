<template>
  <div class="blog">
    <user-sider class="user-sider-wrapper" />
    <div class="user-content-wrapper">
      <router-view class="user-content"/>
    </div>
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
  .user-content-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .user-content {
      max-width: 914px;
    }
  }
}
</style>
