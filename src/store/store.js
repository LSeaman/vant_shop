import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabsActiveName: 'home',
    detailId: 0,
    path: '/homepage'
  },
  mutations: {
    StrChangeTabbar(state, name) {
      state.tabsActiveName = name
    },
    StrGetDetailID(state, id) {
      window.sessionStorage.setItem('detailId', id)
      state.detailId = id
    },
    StrGetRouter(state, path) {
      window.sessionStorage.setItem('path', path)
      state.path = window.sessionStorage.getItem('path')
    }
  },
  actions: {
  },
  modules: {
  }
})
