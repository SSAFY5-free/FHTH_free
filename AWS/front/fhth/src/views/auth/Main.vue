<template>
  <div id="main" class="bc" style="height:100%">
      <div style="display:block;height:80px;position:absolute;width:100%;" class="bc">It is main vue</div>
      <div id = "mainView" style="height:100%" class="bc">
        <robot ></robot>
        <modules></modules>
        <module-view class="bc" ></module-view>
      </div>
  </div>
</template>
<script>
import Robot from "../../components/Robot.vue";
import Modules from "../../components/Modules.vue";
import ModuleView from "../../components/ModuleView.vue";
import { mapState } from "vuex";
import "../../assets/css/main.css"

export default {
  components: {
    Robot,
    Modules,
    ModuleView,
  },
  computed: {
    ...mapState("mainInfo", ["robots", "cur"]),
    // curModule() {
      // return this.$store.state.mainInfo.robots[this.$store.state.mainInfo.cur.robot_idx].modules[this.$store.state.mainInfo.cur.module_idx];
    // }
  },
  methods: {
    
  },
  data() {
return  {
}
  },
  async mounted() {
    await this.$store.dispatch("mainInfo/GET_ROBOTS_FROM_SERVER")
  },
};
</script>