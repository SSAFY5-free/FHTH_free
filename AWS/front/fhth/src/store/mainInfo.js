import { robotAPI } from "../utils/axios"
const mainInfo = {
    namespaced: true,
    state: {
        robots: [{ id: "", modules: [{ id: "", type_id: "", module_data: {}, clickable: false }] }],
        cur: {
            robot_idx: 0,
            module_idx: 0
        },
        socket : {

        }
    },
    mutations: {
        SET_ROBOTS(state, data) {
            state, data
            state.robots = data
        }, SET_CUR_MODULE_IDX(state, data) {
            state.cur.module_idx = data
        },
        SET_MODULE_CLICKABLE(state, data) {
            const{module_id, value} = data
            state.robots[state.cur.robot_idx].modules[module_id].clickable = value
        },
        SET_MODULE_DATA(state, data) {
            const {module_data} = data
            state.robots[state.cur.robot_idx].modules[state.cur.module_idx].module_data = module_data
        }
    },
    getters: {
        GET_CURRENT_MODULE(state) {
            return state.robots[state.cur.robot_idx].modules[state.cur.module_idx]
        }
    }, actions: {
        async GET_ROBOTS_FROM_SERVER({state,dispatch}) {
            const robots_id = (await robotAPI.getRobots_id()).data;
            console.log("robots_id : ", robots_id);

            state.robots = await robots_id.reduce(async (promise, robot) => {
                const acc = await promise.then();

                console.log("robot :  ", robot)
                acc.push({ id: robot, modules: [] });

                const data = await dispatch("GET_MODULES", robot);

                //module
                data.map((e) => {e['clickable'] = false})

                acc[acc.length - 1]["modules"] = data;

                return Promise.resolve(acc);
            }, Promise.resolve([]));
        },
        async GET_MODULES(state, robot_id) {
            console.log("GET_MODULES ID :", robot_id)
            const { data } = await robotAPI.getModules(robot_id);
            for (let i = 0; i < data.length; i++) {
                //   //시간 추가
                data[i]["time"] = new Date();
            }
            return data
        },
    }
}

export default mainInfo