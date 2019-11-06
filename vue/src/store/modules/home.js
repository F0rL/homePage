const home = {
  state: {
    inputFocus: false,
    showWeather: false
  },
  mutations: {
    'SET_INPUTFOCUS': (state, isFocus) => {
      state.inputFocus = isFocus
    },
    'SET_SHOWWEATHER': (state, payload) => {
      state.showWeather = payload
    }
  }
}

export default home