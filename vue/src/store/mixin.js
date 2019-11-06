import { mapGetters, mapActions } from 'vuex'

export const homeMixin = {
  computed: {
    ...mapGetters(['inputFocus', 'showWeather'])
  },
  methods: {
    ...mapActions(['setInputFocus', 'setShowWeather']),
    hideWeather() {
      this.setShowWeather(false)
    }
  }
}
