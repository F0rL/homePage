<template>
  <div class="home-wrapper">
    <div class="home-bg" ref="homeRef" :class="{'input-active': inputFocus}"></div>
    <div class="home-cover" :class="{'input-active': inputFocus}"></div>
    <div class="home-content-wrapper">
      <div class="home-menu-wrapper" @click="hideWeather"></div>
      <div class="home-main-wrapper" @click="hideWeather">
        <div class="home-center-wrapper">
          <home-wellcome class="home-time" />
          <home-input v-model="searchValue" placeholder="请输入搜索内容" @inputSearch="inputSearch" />
        </div>
      </div>
    </div>
    <home-weather :info="weatherInfo" class="home-weather" v-if="weatherInfo"/>
  </div>
</template>

<script>
import { homeMixin } from '../store/mixin'
import HomeInput from '../components/home/HomeInput'
import HomeWellcome from '../components/home/HomeWellcome'
import HomeWeather from '../components/home/HomeWeather'

export default {
  name: 'Home',
  mixins: [homeMixin],
  data() {
    return {
      bgMsg: null,
      searchValue: null,
      weatherInfo: null
    }
  },
  mounted() {
    this.getBgImg()
    this.getWether()
  },
  methods: {
    inputSearch() {
      console.log('搜索', this.searchValue)
      this.searchValue = ''
    },
    getBgImg() {
      this.$http.get('/home/bg').then(res => {
        this.bgMsg = res.data.imgUrl
        this.setBgImg()
      })
    },
    setBgImg(num = 0) {
      this.$refs.homeRef.style.backgroundImage = `url(${this.bgMsg[num].url})`
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
    HomeWeather
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
    .home-menu-wrapper {
      width: 50px;
      background: rgba(0, 0, 0, 0.2);
    }
    .home-main-wrapper {
      position: relative;
      flex: 1;
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
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: transform 0.4s;
    &.input-active {
      transform: scale(1.05);
    }
  }
  .home-cover {
    position: absolute;
    @include fullpage;
    background-color: rgba(0, 0, 0, 0.1);
    &.input-active {
      backdrop-filter: blur(5px);
    }
  }
}
</style>
