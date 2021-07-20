import axios from "axios";
import { userAPI } from "../utils/axios";
import { baseURL, port } from "../utils/conf";
// import Vuex from "vuex";

import VueCookies from "vue-cookies";
//로그인 처리 관련 저장소 모듈

const login = {
  namespaced: true,
  state: {
    host: baseURL + port,
    accessToken: null,
    email: "",
    name: "",
    socket: "aaa",
  },
  mutations: {
    //set User
    // SET_MODULES(state, data) {
    //   state, data;
    //   // const {robot_id, modules_id} = data
    // },
    // SET_MODULE(state, data) {
    //   const { robot_id, module_id, module_data } = data;
    //   state.robots[robot_id][module_id] = module_data;
    // },
    // SET_ROBOTS_ID(state, data) {
    //   console.log("payload", data);
    //   data.map((e) => {
    //     state.robots[e] = {};
    //   });
    //   console.log("userInfo : ", state.robots);
    // },
    //set TokenInfo
    loginToken(state, payload) {
      console.log("login/loinToken");
      console.log(payload);
      VueCookies.set("accessToken", payload.accessToken, "1h");
      state.accessToken = payload.accessToken;
      state.email = payload.email;
    },
    // removeToken() {
    //   console.log("login/removeToken");
    //   VueCookies.remove("accessToken");
    // },
  },
  getters: {
    //쿠키에 저장된 토큰 가져오기
    getToken() {
      let ac = VueCookies.get("accessToken");
      return {
        access: ac,
      };
    },
  },
  actions: {
    signup: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        axios
          .post("/signup", params)
          .then((res) => {
            commit("loginToken", res.data);
            resolve(res);
          })
          .catch((err) => {
            // console.log(err.message);
            reject(err.message);
          });
      });
    },
    GET_USER: ({ state }) => {
      return new Promise((resolve, reject) => {
        userAPI
          .getUser()
          .then((res) => {
            // console.log("here : ", res);
            state.email = res.data.email;
            state.name = res.data.name;
            resolve(res);
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
    SET_SOCKET: ({ state, commit }, params) => {
      state;
      state.socket = params.socket;
      state.socket.on("module", (data) => {
        data;
        const { module_data } = data;
        commit("mainInfo/SET_MODULE_DATA", { module_data }, { root: true });
      });
    },

    EMIT_SOCKET: ({ state }, params) => {
      const { namespace, data } = params;
      state.socket.emit(namespace, data);
    },

    // refreshToken: ({ commit }) => {
    //   // accessToken 재요청
    //   //accessToken 만료로 재발급 후 재요청시 비동기처리로는 제대로 처리가 안되서 promise로 처리함
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post("/v1/auth/certify")
    //       .then((res) => {
    //         commit("refreshToken", res.data.auth_info);
    //         resolve(res.data.auth_info);
    //       })
    //       .catch((err) => {
    //         // console.log('refreshToken error : ', err.config);
    //         reject(err.config.data);
    //       });
    //   });
    // },
    // logout: ({ commit }) => {
    //   // 로그아웃
    //   commit("removeToken");
    //   location.reload();
    // },
  },
};
export default login;
