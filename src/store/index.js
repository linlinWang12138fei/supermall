import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    homeCurrentPosition: 0, //首页的当前位置
  },
  mutations: {
    updataHCP(state,currentPosition) {
      state.homeCurrentPosition = currentPosition;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
