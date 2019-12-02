import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
import './plugins/vant.js'
import 'vant/lib/index.css'
import { format, parseJSON, formatDistance } from 'date-fns'

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.config.productionTip = false

Vue.filter('dateFormat', value => {
  return format(parseJSON(value), 'yyyy-MM-dd HH:mm:ss')
})

//  指定日期到此时此刻 间隔的时间
Vue.filter('theDayBefore', value => {
  return formatDistance(parseJSON(value), new Date())
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
