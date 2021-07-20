import { robotAPI } from "../utils/axios";
const mainInfo = {
  namespaced: true,
  state: {
    robots: [
      {
        id: "",
        modules: [{ id: "", type_id: "", module_data: {}, clickable: false }],
      },
    ],
    cur: {
      robot_idx: 0,
      module_idx: 0,
    },
    lst: {
      robots: [],
    },
  },
  mutations: {
    SET_ROBOTS(state, data) {
      state, data;
      state.robots = data;
      state.lst.robots = state.robots.reduce((acc, cur) => {
        acc.push({ id: cur._id, name: cur.name });
        return acc;
      }, []);
    },
    SET_CUR_MODULE_IDX(state, data) {
      state.cur.module_idx = data;
    },
    SET_MODULE_CLICKABLE(state, data) {
      const { module_id, value } = data;
      state.robots[state.cur.robot_idx].modules[module_id].clickable = value;
    },
    SET_MODULE_DATA(state, data) {
      const { module_data } = data;
      state.robots[state.cur.robot_idx].modules[
        state.cur.module_idx
      ].module_data = module_data;
    },
  },
  getters: {
    GET_CURRENT_MODULE(state) {
      return state.robots[state.cur.robot_idx].modules[state.cur.module_idx];
    },
  },
  actions: {
    async GET_ROBOTS_FROM_SERVER({ dispatch, commit }) {
      const robots = (await robotAPI.getRobots()).data;

      const robots_data = await robots.reduce(async (promise, robot) => {
        const acc = await promise.then();

        acc.push({ ...robot });
        const data = await dispatch("GET_MODULES", robot._id);

        //module
        data.map((e) => {
          e["clickable"] = false;
        });

        acc[acc.length - 1]["modules"] = data;

        return Promise.resolve(acc);
      }, Promise.resolve([]));
      //   console.log("SET init result : ", state.robots);

      commit("SET_ROBOTS", robots_data);
    },

    async GET_MODULES(state, robot_id) {
      const { data } = await robotAPI.getModules(robot_id);

      for (let i = 0; i < data.length; i++) {
        //   //시간 추가
        data[i]["time"] = new Date();
      }
      return data;
    },
  },
};

export default mainInfo;
