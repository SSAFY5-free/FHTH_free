<template>
  <div id="Main" style="height: 100%" class="bc">
    <p>It is main vue</p>
    <!-- {{this.$store.state.mainInfo.robots}} -->
    <robot></robot>
    <modules></modules>
  </div>
</template>
<script>
import Robot from "../../components/Robot.vue";
import Modules from "../../components/Modules.vue";
import { robotAPI } from "../../utils/axios";
import { mapState } from "vuex";

export default {
  components: {
    Robot,
    Modules,
  },
  computed: {
    ...mapState("mainInfo", ["robots"]),
  },
  methods: {
    // ...mapMutations("mainInfo", ["SET_ROBOTS", "SET_MODULES_ID"]),

    async GET_ROBOTS_FROM_SERVER() {
      const robots_id = (await robotAPI.getRobots_id()).data;
      //robot id별로 배열 원소 생성

      const result = await robots_id.reduce(async (acc, cur) => {
        acc.push({ id: cur, modules: [] });
        // console.log(acc[acc.length-1])

        const {data} = await robotAPI.getModules(cur);
        console.log("dd : ", data);

        acc[acc.length - 1]["modules"] = data
        return acc;
      }, []);
      console.log("result : ", result);
      return { result };
    },
  },
  async mounted() {
    const { result } = await this.GET_ROBOTS_FROM_SERVER();
    console.log("in main.vue : ", result);
    //  this.$set(this.$store.state.mainInfo.robots, 0)
    this.$store.commit("mainInfo/SET_ROBOTS", result);
    console.log("ㅋㅋㅋㅋ : ", this.$store.state.mainInfo.robots);
  },
};
</script>

<style>
</style>