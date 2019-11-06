const actions = {
  setInputFocus: ({ commit }, isFocus) => {
    return commit('SET_INPUTFOCUS', isFocus)
  },
  setShowWeather: ({ commit }, payload) => {
    return commit('SET_SHOWWEATHER', payload)
  }
}

export default actions
