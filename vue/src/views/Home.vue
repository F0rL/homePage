<template>
  <div class="home-wrapper" ref="homeRef" :class="{'input-active': inputFocus}">
    <div class="home-cover" :class="{'input-active': inputFocus}" ></div>
    <div class="home-center-wrapper">
      <x-time class="home-time"/>
      <home-input 
        v-model="searchValue" 
        placeholder="请输入搜索内容"
        @inputSearch="inputSearch"
      />
    </div>
  </div>
</template>

<script>
import { homeMixin } from '../store/mixin'
import HomeInput from '../components/home/HomeInput'
import xTime from '../components/common/xTime'
export default {
  name: 'Home',
  mixins: [homeMixin],
  data() {
    return {
      bgMsg: null,
      searchValue: null
    }
  },
  mounted() {
    this.$http.get('/home/bg').then(res => {
      this.bgMsg = res.data.imgUrl
      this.setBgImg()
    })
  },
  methods: {
    inputSearch(){
      console.log('搜索', this.searchValue)
      this.searchValue = ''
    },
    setBgImg(num = 0) {
      this.$refs.homeRef.style.backgroundImage = `url(${this.bgMsg[num].url})`
    }
  },
  components: {
    HomeInput,
    xTime
  }
}
</script>

<style lang="scss">
.home-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform .4s;
  &.input-active {
    transform: scale(1.05);
  }
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
  .home-cover {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    &.input-active {
      backdrop-filter: blur(5px);
    }
  }
}
</style>
