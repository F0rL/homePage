const home = {
  state: {
    inputFocus: false,
    showWeather: false,
    showSider: false,
    showBgSetting: false,
    bgInfo: null,
    currentBg: null
  },
  mutations: {
    'SET_INPUTFOCUS': (state, isFocus) => {
      state.inputFocus = isFocus
    },
    'SET_SHOWWEATHER': (state, payload) => {
      state.showWeather = payload
    },
    'SET_SHOWSIDER': (state, payload) => {
      state.showSider = payload
    },
    'SET_SHOWBGSETTING': (state, payload) => {
      state.showBgSetting = payload
    },
    'SET_BGINFO': (state, payload) => {
      state.bgInfo = payload
    },
    'SET_CURRENTBG': (state, payload) => {
      state.currentBg = payload
    }
  }
}

export default home