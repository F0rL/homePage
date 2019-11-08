<template>
  <div class="home-sider">
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
    <home-sider-item />
  </div>
</template>

<script>
import HomeSiderItem from './HomeSiderItem'
import { homeMixin } from '@/store/mixin'
export default {
  name: 'HomeSider',
  mixins: [homeMixin],
  components: {
    HomeSiderItem
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';

.home-sider {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
}
</style>
