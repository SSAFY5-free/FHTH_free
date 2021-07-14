<template>
  <div id="main" class="bc" style="height: 100%">
    <div id="nav"
      class="bc"
      style="display:flex;justify-content:space-between"
    >
      <!-- It is main vue -->
      {{curModule}}
      <div id="logo" class="bc">로고</div>
      <div id="userInfo" style="display:flex" class="bc">
        <div>유저 아이디</div>
        <div>설정</div>
        <div>로그아웃</div>
      </div>
    </div>
      <robot></robot>
    <div id="mainView" class="bc">
      <modules></modules>
      <module-view class="bc" v-bind:module = curModule></module-view>
    </div>
  </div>
</template>
<script>
import Robot from "../../components/Robot.vue";
// import Modules from "../../components/Modules.vue";
import ModuleView from "../../components/ModuleView.vue";
import { mapState } from "vuex";
import Modules from '../../components/Modules.vue';
// import io from "socket.io-client"


export default {
  components: {
    Robot,
    // Modules,
    ModuleView,
    Modules,
  },
  computed: {
    ...mapState("mainInfo", ["robots", "cur"]),
    curModule() {
      return this.$store.state.mainInfo.robots[this.$store.state.mainInfo.cur.robot_idx].modules[this.$store.state.mainInfo.cur.module_idx];
    }
  },
  async mounted() {
   this.$store.dispatch("mainInfo/GET_ROBOTS_FROM_SERVER")
  }
}
</script>