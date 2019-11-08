<template>
  <div class="sider">
    <sider-item data="/"/>
    <sider-item data="blog"/>
    <sider-item />
    <sider-item />
    <sider-item />
    <sider-item />
    <sider-item />
  </div>
</template>

<script>
import SiderItem from './SiderItem'
export default {
  name: 'Sider',
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
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
}
</style>
