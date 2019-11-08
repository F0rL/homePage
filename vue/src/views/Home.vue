<template>
  <div class="home-wrapper">
    <div
      class="home-bg"
      :class="{'input-active': inputFocus}"
      :style="{backgroundImage: `url(${currentBg})`}"
    ></div>
    <div class="home-cover" :class="{'input-active': inputFocus}"></div>
    <div class="home-content-wrapper">
      <home-sider
        class="home-sider-wrapper"
        @click="hideWeather"
        :class="{'sider-active': showSider}"
      ></home-sider>
      <div class="home-main-wrapper" @click="hideWeather">
        <home-setting class="home-setting-wrapper" />
        <div class="home-center-wrapper">
          <home-wellcome class="home-time" />
          <home-input
            v-model.trim="searchValue"
            placeholder="请输入搜索内容"
            @inputSearch="inputSearch"
            @enter="inputSearch"
          />
        </div>
      </div>
    </div>
    <home-weather :info="weatherInfo" class="home-weather" v-if="weatherInfo" />
    <div class="setting-cover" v-if="showBgSetting"></div>
    <transition name="fade-in">
      <div class="setting-bg-wrapper" v-if="showBgSetting">
        <home-setting-bg />
      </div>
    </transition>
    <page-info />
  </div>
</template>

<script>
import { homeMixin } from '../store/mixin'
import HomeInput from '../components/home/HomeInput'
import HomeWellcome from '../components/home/HomeWellcome'
import HomeWeather from '../components/home/HomeWeather'
import HomeSider from '../components/home/HomeSider'
import HomeSetting from '../components/home/HomeSetting'
import HomeSettingBg from '../components/home/HomeSettingBg'
import PageInfo from '../components/home/PageInfo'

export default {
  name: 'Home',
  mixins: [homeMixin],
  data() {
    return {
      searchValue: '',
      weatherInfo: null
    }
  },
  mounted() {
    this.getBgImg()
    this.getWether()
  },
  methods: {
    inputSearch() {
      if (this.searchValue.length === 0) {
        return
      }
      window.open(`https://www.baidu.com/s?wd=${this.searchValue}`)
      this.searchValue = ''
    },
    getWether() {
      this.$http.get('/home/getwether').then(res => {
        this.weatherInfo = res.data.forecasts[0]
        console.log(this.weatherInfo)
      })
    }
  },
  components: {
    HomeInput,
    HomeWellcome,
    HomeWeather,
    HomeSider,
    HomeSetting,
    HomeSettingBg,
    PageInfo
  }
}
</script>

<style lang="scss">
@import '../assets/style/global.scss';
.home-wrapper {
  position: relative;
  @include fullpage;
  .home-content-wrapper {
    position: relative;
    @include fullpage;
    display: flex;
    .home-sider-wrapper {
      background: rgba(48, 65, 86, 0.6);
      color: rgb(191, 203, 217);
      backdrop-filter: blur(5px);
      width: 0px;
      overflow: hidden;
      transition: width 0.3s ease;
      &.sider-active {
        width: 100px;
      }
    }
    .home-main-wrapper {
      position: relative;
      flex: 1;
      .home-setting-wrapper {
        position: absolute;
        left: 30px;
        top: 15px;
        /* background: rgba(48, 65, 86, 0.6); */
      }
      .home-center-wrapper {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        @include columnCenter;
        .home-time {
          font-size: 40px;
          color: #fff;
          margin-bottom: 20px;
        }
      }
    }
  }
  .home-weather {
    position: absolute;
    right: 50px;
    top: 20px;
  }
  .home-bg {
    position: absolute;
    @include fullpage;
    @include imgCenter;
    transition: transform 0.4s;
    &.input-active {
      transform: scale(1.05);
    }
  }
  .home-cover {
    @include fullpage;
    background-color: rgba(0, 0, 0, 0.1);
    &.input-active {
      backdrop-filter: blur(5px);
    }
  }
  .setting-cover {
    @include fullpage;
    backdrop-filter: blur(5px);
  }
  .setting-bg-wrapper {
    width: 100%;
    height: 100%;
    @include center;
  }
}
</style>
