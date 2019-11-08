<template>
  <ul class="x-flex-wrapper">
    <li
      class="x-flex-item"
      v-for="(item, index) in data"
      :key="index"
      :style="{backgroundImage: `url(${item.url})`}"
      @click="setCurrentBgAndCache(item.url)"
    >
      <div class="x-item-cover" v-show="item.url === currentBg"></div>
      <x-icon name="choose" class="x-flex-icon" v-show="item.url === currentBg" />
    </li>
  </ul>
</template>

<script>
import xIcon from './xIcon'
import { homeMixin } from '@/store/mixin'
export default {
  name: 'xFlex',
  mixins: [homeMixin],
  computed: {
  },
  props: {
    data: {
      type: Array
    }
  },
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/global.scss';
.x-flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  .x-flex-item {
    position: relative;
    flex-grow: 1;
    width: 32%;
    height: 150px;
    margin-top: 5px;
    @include imgCenter;
    @include center;
    .x-item-cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .x-flex-icon {
      font-size: 30px;
      color: rgb(233, 229, 229);
      z-index: 10;
    }
    &:nth-child(3n-1) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}
</style>
