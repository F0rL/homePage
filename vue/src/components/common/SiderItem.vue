<template>
  <div class="sider-item" @click="routerpush">
    <x-icon name="daohang" class="sider-item-icon"></x-icon>
    <span class="sider-item-msg">主页</span>
  </div>
</template>

<script>
import xIcon from './xIcon'

export default {
  name: 'SiderItem',
  props: {
    data: String
  },
  methods: {
    routerpush() {
      this.$router.push(`${this.data}`)
    }
  },
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';

.sider-item {
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
