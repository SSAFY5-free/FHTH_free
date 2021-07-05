import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import userInfo from "@/store/login.js"


export default new Vuex.Store({
  state: {
    curRobot : {},
    curModules : {}
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    

  },
  modules: {
    userInfo
  }
})
