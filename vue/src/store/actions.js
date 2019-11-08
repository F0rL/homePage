const actions = {
  setInputFocus: ({ commit }, isFocus) => {
    return commit('SET_INPUTFOCUS', isFocus)
  },
  setShowWeather: ({ commit }, payload) => {
    return commit('SET_SHOWWEATHER', payload)
  },
  setShowSider: ({ commit }, payload) => {
    return commit('SET_SHOWSIDER', payload)
  },
  setShowBgSetting: ({ commit }, payload) => {
    return commit('SET_SHOWBGSETTING', payload)
  },
  setBgInfo: ({ commit }, payload) => {
    return commit('SET_BGINFO', payload)
  },
  setCurrentBg: ({ commit }, payload) => {
    return commit('SET_CURRENTBG', payload)
  }
}

export default actions
