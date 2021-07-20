<template>
  <div id="Main" class="bc" style="height: 100%">
    <Nav></Nav>
    <div id="sideBar">
      <robot></robot>
      <modules></modules>
    </div>
    <div id="mainView">
      <module-view :modules="modules" :module="module"></module-view>
    </div>
  </div>
</template>
<script>
import Robot from "../../components/Robot.vue";
import ModuleView from "../../components/ModuleView.vue";
import { mapState } from "vuex";
import Modules from "../../components/Modules.vue";
import Nav from "../../components/Nav.vue";
// import User from "../../components/User.vue";
import io from "socket.io-client";
import { baseURL, port } from "../../utils/conf";

export default {
  components: {
    Robot,
    // Modules,
    ModuleView,
    Modules,
    Nav,
    // User,
  },
  computed: {
    ...mapState("mainInfo", ["robots", "cur", "lst"]),

    modules() {
      return this.$store.state.mainInfo.robots[
        this.$store.state.mainInfo.cur.robot_idx
      ].modules;
    },
    module() {
      return this.$store.state.mainInfo.robots[
        this.$store.state.mainInfo.cur.robot_idx
      ].modules[this.$store.state.mainInfo.cur.module_idx];
    },
    socket: {
      //get
      get: function () {
        return this.$socket;
      },
      set: function (obj) {
        this.$socket = obj;
      },
    },
  },
  created() {
    this.$store.dispatch("userInfo/SET_SOCKET", {
      socket: io(baseURL + port.server, {
        withCredentials: true,
        extraHeaders: {
          "my-custom-header": "abcd",
        },
      }),
    });

    setInterval(() => {
      this.$store.dispatch("userInfo/EMIT_SOCKET", {
        namespace: "module",
        data: {
          _id: this.modules[this.cur.module_idx]._id,
        },
      });
    }, 2000);
  },
  async mounted() {
    this.$store.dispatch("mainInfo/GET_ROBOTS_FROM_SERVER");
    this.$store.dispatch("userInfo/GET_USER");
  },
};
</script>