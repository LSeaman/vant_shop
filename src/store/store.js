import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabsActive: 0
  },
  mutations: {
    StrChangeTabbar(state, index) {
      state.tabsActive = index
    }
  },
  actions: {
  },
  modules: {
  }
})
