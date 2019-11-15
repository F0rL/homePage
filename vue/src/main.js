import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.scss'
// import './assets/style/global.scss'
import http from './api/http'
import { setIconFontJs } from './utils/tool'

Vue.config.productionTip = false

// set iconFont script 
setIconFontJs()
// set html fontSize
// setFontSize()

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
