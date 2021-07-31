import axios from "axios";
import { userAPI } from "../utils/axios";
import { baseURL, port } from "../utils/conf";
import createPersistedState from "vuex-persistedstate";
import VueCookies from "vue-cookies";
//로그인 처리 관련 저장소 모듈

const login = {
  plugins: [createPersistedState({})],
  namespaced: true,
  state: {
    host: baseURL + port,
    // accessToken: null,
    email: "",
    name: "",
    socket: "aaa",
  },
  mutations: {
    loginToken(state, payload) {
      console.log("login/loinToken");
      console.log(payload);
      VueCookies.set("accessToken", payload.accessToken, "1h");
      state.accessToken = payload.accessToken;
      state.email = payload.email;
    },
    removeToken() {
      VueCookies.remove("accessToken");
    },
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
            reject(err.message);
          });
      });
    },
    GET_USER: ({ state }) => {
      return new Promise((resolve, reject) => {
        userAPI
          .getUser()
          .then((res) => {
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

    EMIT_SOCKET: ({ state, rootState }, params) => {
      rootState;
      const { namespace, data } = params;
      state.socket.emit(namespace, data);
    },
  },
};
export default login;
