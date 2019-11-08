<template>
  <div class="home-setting">
    <div class="setting-bg-check">
      <div class="setting-title">选择切换背景</div>
      <div class="setting-scroll">
        <div class="default-bg">
          <p class="default-title">导易美图</p>
          <x-flex :data="bgInfo.imgUrl" v-if="bgInfo" />
        </div>
        <div class="bing-bg">
          <p class="bing-title">Bing美图</p>
          <x-flex :data="bgInfo.bingUrl" v-if="bgInfo" />
        </div>
      </div>
      <x-icon name="close" class="setting-hide-button" @click="setShowBgSetting(false)" />
    </div>
  </div>
</template>

<script>
import xFlex from '../common/xFlex'
import xIcon from '../common/xIcon'
import { homeMixin } from '@/store/mixin'

export default {
  name: 'HomeSettingBg',
  mixins: [homeMixin],
  data() {
    return {}
  },
  components: {
    xFlex,
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.home-setting {
  position: relative;
  .setting-bg-check {
    width: 600px;
    height: 500px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    overflow: hidden;
    .setting-scroll {
      position: absolute;
      top: 80px;
      bottom: 30px;
      right: 30px;
      left: 30px;
      /* overflow-x: hidden;
      overflow-y: auto; */
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0px;
        background-color: #eee;
      }
      /* &::-webkit-scrollbar-track {
        background-color: #eee;
      }
      &::-webkit-scrollbar-thumb {
        background: #397094;
      } */
      .default-bg {
        .default-title {
          font-size: 16px;
          margin-bottom: 5px;
        }
      }
      .bing-bg {
        .bing-title {
          font-size: 16px;
          margin-bottom: 5px;
          margin-top: 10px;
        }
      }
    }
    .setting-title {
      font-size: 30px;
    }
    .setting-hide-button {
      position: absolute;
      right: 30px;
      top: 30px;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
