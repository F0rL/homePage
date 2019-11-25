<template>
  <div class="home-toggle-button">
    <div class="sider-setting-wrapper" @click="toggleSider">
      <x-icon name="shezhi" class="toggle-sider-icon" />
    </div>
    <div class="bg-setting-wrapper" @click="setShowBgSetting(true)">
      <x-icon name="pifu" class="change-bg-icon" />
    </div>
  </div>
</template>

<script>
import xIcon from '../common/xIcon'
import { homeMixin } from '@/store/mixin'

export default {
  name: 'HomeSetting',
  mixins: [homeMixin],
  methods: {
    toggleSider() {
      let ifShow = this.showSider
      this.setShowSider(!ifShow)
    }
  },
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
.home-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: rgb(250, 255, 255, .6);
  cursor: pointer;
  .sider-setting-wrapper {
    .toggle-sider-icon {
      transition: transform 0.3s ease;
      &:hover {
        color: #fff;
        transform: rotate(180deg);
      }
    }
  }
  .bg-setting-wrapper {
    margin-left: 10px;
    .change-bg-icon {
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
