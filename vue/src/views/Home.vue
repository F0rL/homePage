<template>
  <div class="home-wrapper">
    <div class="home-bg" ref="homeRef" :class="{'input-active': inputFocus}"></div>
    <div class="home-cover" :class="{'input-active': inputFocus}"></div>
    <div class="home-content-wrapper">
      <div class="home-menu-wrapper"></div>
      <div class="home-main-wrapper">
        <home-wether :wetherInfo="wetherInfo" />
        <div class="home-center-wrapper">
          <x-time class="home-time" />
          <home-input v-model="searchValue" placeholder="请输入搜索内容" @inputSearch="inputSearch" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeMixin } from '../store/mixin'
import HomeInput from '../components/home/HomeInput'
import xTime from '../components/common/xTime'
import HomeWether from '../components/home/HomeWether'
export default {
  name: 'Home',
  mixins: [homeMixin],
  data() {
    return {
      bgMsg: null,
      searchValue: null,
      wetherInfo: null
    }
  },
  mounted() {
    this.$http.get('/home/bg').then(res => {
      this.bgMsg = res.data.imgUrl
      this.setBgImg()
    })
    this.getWether()
  },
  methods: {
    inputSearch() {
      console.log('搜索', this.searchValue)
      this.searchValue = ''
    },
    setBgImg(num = 0) {
      this.$refs.homeRef.style.backgroundImage = `url(${this.bgMsg[num].url})`
    },
    getWether() {
      this.$http.get('/home/getwether').then(res => {
        this.wetherInfo = res.data.forecasts[0]
      })
    }
  },
  components: {
    HomeInput,
    xTime,
    HomeWether
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
        .home-time {
          font-size: 40px;
          color: #fff;
          margin-bottom: 20px;
        }
      }
    }
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
