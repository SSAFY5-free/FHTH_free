import axios from "axios";
// import Vuex from "vuex";

import VueCookies from 'vue-cookies';
//로그인 처리 관련 저장소 모듈

const login = {
  // root:true,
  namespaced: true,
  state: {
    host: 'http://localhost:8080',
    accessToken: null,
    user_email: "",
  },
  mutations: {
    //set User
    SET_MODULES (state, data) {
      state, data
      // const {robot_id, modules_id} = data
    },
    SET_MODULE(state,data) {
      const {robot_id, module_id, module_data} = data
      state.robots[robot_id][module_id] = module_data
    },
    SET_ROBOTS_ID(state, data) {
      console.log("payload", data)
      data.map((e) => { state.robots[e] = {} })
      console.log("userInfo : " , state.robots)
    },
    //set TokenInfo
    loginToken(state, payload) {
      console.log("login/loinToken")
      VueCookies.set('accessToken', payload.accessToken, '1h');
      // VueCookies.set('refreshToken', payload.refreshToken, '1h');
      state.accessToken = payload.accessToken;
      // state.refreshToken = payload.refreshToken;
    },
    // refreshToken(state, payload) { //accessToken 재셋팅
    //   console.log("login/refreshToken")
    //   VueCookies.set('accessToken', payload.accessToken, '1h');
    //   // VueCookies.set('refreshToken', payload.refreshToken, '1h');
    //   state.accessToken = payload.accessToken;
    // },
    removeToken() {
      console.log("login/removeToken")
      VueCookies.remove('accessToken');
      // VueCookies.remove('refreshToken');
    },
  },
  getters: {
    //get UserInfo
    //쿠키에 저장된 토큰 가져오기
    getToken() {
      let ac = VueCookies.get('accessToken');
      // let rf = VueCookies.get('refreshToken');
      return {
        access: ac,
        // refresh: rf
      };
    }
  },
  actions: {
    login: ({ commit }, params) => {
      return new Promise((resove, reject) => {
        axios.post('/signup', params).then(res => {
          commit('loginToken', res.data.auth_info);
          resove(res);
        })
          .catch(err => {
            // console.log(err.message);
            reject(err.message);
          });
      })
    },
    refreshToken: ({ commit }) => { // accessToken 재요청
      //accessToken 만료로 재발급 후 재요청시 비동기처리로는 제대로 처리가 안되서 promise로 처리함
      return new Promise((resolve, reject) => {
        axios.post('/v1/auth/certify').then(res => {
          commit('refreshToken', res.data.auth_info);
          resolve(res.data.auth_info);
        }).catch(err => {
          // console.log('refreshToken error : ', err.config);
          reject(err.config.data);
        })
      })
    },
    logout: ({ commit }) => { // 로그아웃
      commit('removeToken');
      location.reload();
    }
  }
}
export default login