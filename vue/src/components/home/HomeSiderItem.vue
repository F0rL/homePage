<template>
  <div class="home-sider-item">
    <x-icon name="daohang" class="sider-item-icon"></x-icon>
    <span class="sider-item-msg">主页</span>
  </div>
</template>

<script>
import xIcon from '../common/xIcon'
import { homeMixin } from '@/store/mixin'

export default {
  name: 'HomeSiderItem',
  mixins: [homeMixin],
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';

.home-sider-item {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: cadetblue;
  }
  .sider-item-icon {
    margin-left: 8px;
    font-size: 20px;
  }
  .sider-item-msg {
    font-size: 16px;
    margin-left: 8px;
    white-space: nowrap;
  }
}
</style>
