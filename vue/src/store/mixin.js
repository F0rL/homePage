import { mapGetters, mapActions } from 'vuex'
import {
  saveBgInfoCache,
  getBgInfoCache,
  saveCurrentBgCache,
  getCurrentBgCache
} from '../utils/localStorage'

export const homeMixin = {
  computed: {
    ...mapGetters([
      'inputFocus',
      'showWeather',
      'showSider',
      'showBgSetting',
      'bgInfo',
      'currentBg'
    ])
  },
  methods: {
    ...mapActions([
      'setInputFocus',
      'setShowWeather',
      'setShowSider',
      'setShowBgSetting',
      'setBgInfo',
      'setCurrentBg'
    ]),
    hideWeather() {
      this.setShowWeather(false)
    },
    async getBgImg() {
      const bgCache = getBgInfoCache()
      if (!bgCache) {
        this.$http.get('/home/bg').then(res => {
          console.log(res)
          saveBgInfoCache(res.data, 60 * 60 * 24)
          this.setBgInfo(res.data)
          this.getCurrentBg()
        })
      } else {
        console.log('get cache bgInfo')
        this.setBgInfo(bgCache)
        this.getCurrentBg()
      }
    },
    getCurrentBg() {
      const currentBg = getCurrentBgCache()
      if(!currentBg){
        console.log('init current')
        this.setCurrentBg(this.bgInfo.imgUrl[0].url)
        saveCurrentBgCache(this.bgInfo.imgUrl[0].url)
      }else {
        console.log('get cache current')
        this.setCurrentBg(currentBg)
      }
    },
    setCurrentBgAndCache(url) {
      this.setCurrentBg(url)
      saveCurrentBgCache(url)
    }
  }
}
 