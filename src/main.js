import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import './plugins/vant.js'
import 'vant/lib/index.css'

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
