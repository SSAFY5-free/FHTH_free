import axios from "axios";
// import store from "../store"
import VueCookies from "vue-cookies";
import conf from "../utils/conf";
//request 설정

const request = axios.create({
  baseURL: conf.baseURL + conf.port.server,
});
request.interceptors.request.use(
  async function(config) {
    config.timeout = 10000;
    config.headers["x-access-token"] = VueCookies.get("accessToken");
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function(error) {
    console.log("axios request error : ", error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    try {
      return response;
    } catch (err) {
      console.error("[axios.interceptors.response] response : ", err.message);
    }
  },
  async function(error) {
    return Promise.reject(error);
  }
);

export const userAPI = {
  login: (email, pw) => {
    const result = request.post("/unauth/getAccessToken", {
      email,
      pw,
      name,
    });
    console.log(result);
    return result;
  },
  signup: (form) => {
    return request.post("/unauth/addAccount", form);
  },
  getUser: () => {
    console.log("robot_API_GET_USER");
    return request.get("/auth/getUser");
  },
};

export const robotAPI = {
  getRobots: () => {
    return request.post("/auth/getRobots");
  },
  verifyRobot: (form) => {
    return request.post("/unauth/verifyRobot", { form });
  },
  getModules: (_id) => {
    console.log("robotAPI _ GETMODULES : ");
    return request.post("/auth/getModules", { _id });
  },
  getModule: (_id) => {
    console.log("robotAPI _ GETMODULE : ");
    return request.post("/auth/getModule", { _id });
  },
};

export const moduleAPI = {
  command: (data) => {
    return request
      .post("/auth/commandModule", {
        data: data,
        timeout: 3000,
      })
      .catch((error) => {
        if (error.response.status == 404) alert("경로가 존재하지 않습니다");
        return error.response.status;
      });
  },
};
