import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import userInfo from "@/store/userInfo.js"
import mainInfo from "@/store/mainInfo.js"


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    userInfo,
    mainInfo
  }
})
