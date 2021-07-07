const mainInfo = {
    namespaced : true,
    state : {
    robots: ["dd"],
    cur: {
        robot_idx : 0
        },
    },  
    mutations : {
        SET_ROBOTS (state,data) {
            state,data
            state.robots = data
        },
    },
    getters : {

    }
}

export default mainInfo