<template>
  <div id="Modules" class="bc">
    <!-- <p>Modules</p> -->
    {{cur}}
    <el-button
      style="height: 100px; width: 100px; margin: 0px"
      type="primary"
      size="default"
      v-for="(module, idx) in robots[cur.robot_idx].modules"
      :key="module.id"
      
      @click="onClick(idx)"
    >
    </el-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { robotAPI } from "../utils/axios";

export default {
  components: {},
  computed: {
    ...mapState("mainInfo", ["robots", "cur"]),
  },
  methods: {
    ...mapMutations("mainInfo", ["SET_CUR_MODULE_IDX"]),
    onClick(idx) {
      this.$store.commit("mainInfo/SET_CUR_MODULE_IDX", idx);
    },
    async getModule(module, idx) {
      console.log("mi : ", module, idx);
      // while (this.connect_count[idx] >=0) {
        let data;
        try {
          data = (await robotAPI.getModule(module.id)).data;
          console.log("receive : data")
          
        } catch (err) {
          data = "fail";
          console.log(err);
        }
        console.log("md : ", data, this.connect_count);
      }
    // },
  },
  data() {
    return {
      connect_count: [0],
    };
  },
  mounted() {
    let modules = this.robots[this.cur.robot_idx].modules;
    for(let i = 0 ; i < modules.length; i++) {
      this.getModule(modules[i])
    }
  },
};
</script>

<style>
</style>