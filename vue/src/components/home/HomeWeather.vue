<template>
  <div class="weather-wrapper">
    <div class="weather-main-wrapper" @click="toggleWeather">
      <div class="weather-icon">
        <x-icon name="weather1" />
      </div>
      <div class="weather-main">
        <div class="city">
          <p>{{info.city}}</p>
          <p>{{info.casts[0].daytemp}}° / {{info.casts[0].nighttemp}}</p>
          <p>{{info.casts[0].dayweather}} / {{info.casts[0].nightweather}}</p>
        </div>
      </div>
    </div>
    <transition name="slide-down">
      <div class="weather-more-wapper" v-show="showWeather">
        <div class="weather-check">
          <p class="weather-check-city">{{checkInfo.city}}</p>
          <p class="weather-check-week">星期{{checkInfo.week | numToChinese}}</p>
          <div class="weather-check-info">
            <div class="weather-icon">
              <x-icon name="weather1" />
            </div>
            <div class="weather-check-main">
              <p>
                <span>{{checkInfo.daytemp}}°</span> /
                <span>{{checkInfo.nighttemp}}°</span>
              </p>
              <p>
                <span>{{checkInfo.dayweather}}</span> /
                <span>{{checkInfo.nightweather}}</span>
              </p>
            </div>
          </div>
        </div>
        <ul class="weather-more">
          <li
            class="weather-item-wrapper"
            v-for="(item, index) in info.casts"
            :key="index"
            @click="setCheck(index)"
            :class="{'item-active': index === checkDay}"
          >
            <p class="weather-check-week">星期{{item.week | numToChinese}}</p>
            <p>
              <span>{{item.daytemp}}°</span> /
              <span>{{item.nighttemp}}°</span>
            </p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import xIcon from '../common/xIcon'
import { numToChinese } from '@/utils/tool'
import { homeMixin } from '@/store/mixin'

export default {
  name: 'HomeWeather',
  mixins: [homeMixin],
  data() {
    return {
      checkDay: 0
    }
  },
  props: {
    info: {
      type: Object
    }
  },
  watch: {
    showWeather(val) {
      !val && (this.checkDay = 0)
    }
  },
  computed: {
    checkInfo() {
      let tInfo = this.info
      let city = tInfo.city
      let cast = tInfo.casts[this.checkDay]
      let week = tInfo.casts[this.checkDay].week
      return {
        city,
        week,
        dayweather: cast.dayweather,
        nightweather: cast.nightweather,
        daytemp: cast.daytemp,
        nighttemp: cast.nighttemp
      }
    }
  },
  methods: {
    setCheck(index) {
      this.checkDay = index
    },
    toggleWeather() {
      let ifShow = this.showWeather
      this.setShowWeather(!ifShow)
    }
  },
  filters: {
    numToChinese
  },
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.weather-wrapper {
  position: relative;
  .weather-main-wrapper {
    cursor: pointer;
    @include center;
    color: #fff;
    letter-spacing: 2px;
    .weather-icon {
      @include center;
      font-size: 40px;
      margin-right: 5px;
    }
    .weather-main {
      font-size: 14px;
      line-height: 1.2em;
    }
  }
  .weather-more-wapper {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 4px;
    padding: 10px;
    width: 350px;
    /* background-color: rgba(15, 15, 15, 0.8); */
    border-radius: 10px;
    border: 2px solid #fff;
    color: #fff;
    backdrop-filter: blur(10px);
    @include columnStart;
    .weather-check {
      @include columnStart;
      .weather-check-city {
        font-size: 32px;
      }
      .weather-check-week {
        margin-top: 8px;
        font-size: 25px;
      }
      .weather-check-info {
        margin-top: 8px;
        @include center;
        .weather-icon {
          @include center;
          font-size: 80px;
        }
        .weather-check-main {
          margin-left: 4px;
          line-height: 1.2em;
          font-size: 25px;
        }
      }
    }
    .weather-more {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      align-self: stretch;
      @include center;
      margin-top: 8px;
      .weather-item-wrapper {
        margin-top: 8px;
        color: #fff;
        opacity: 0.6;
        text-align: center;
        flex: 1;
        font-size: 12px;
        line-height: 1.4em;
        padding: 5px;
        cursor: pointer;
        &.item-active {
          opacity: 1;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
