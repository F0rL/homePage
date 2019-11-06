const home = {
  state: {
    inputFocus: false
  },
  mutations: {
    'SET_INPUTFOCUS': (state, isFocus) => {
      state.inputFocus = isFocus
    }
  }
}

export default home