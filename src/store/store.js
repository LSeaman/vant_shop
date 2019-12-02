import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabsActiveName: 'home',
    detailId: 0
  },
  mutations: {
    StrChangeTabbar(state, name) {
      state.tabsActiveName = name
    },
    StrGetDetailID(state, id) {
      state.detailId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
