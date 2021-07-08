<template>
  <div id="Modules" class="bc">
    <!-- <p>Modules</p> -->
    <!-- {{cur}} -->
    <el-button style="height:100px;width:100px;margin:0px" type="primary" size="default" v-for="(module,idx) in robots[cur.robot_idx].modules" :key="module.id" @click="onClick(idx)" ></el-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  components: {},
  computed: {
    // ...mapGetters("mainInfo", ["GET_CURRENT_MODULE"]),
    ...mapState("mainInfo", ["robots", "cur"]),
  },
  methods: {
    ...mapMutations("mainInfo",["SET_CUR_MODULE_IDX"]),
    onClick(idx) {
      // this.cur.module_idx = idxs
      // this.SET_CUR_MODULE_IDX(idx)
      this.$store.commit("mainInfo/SET_CUR_MODULE_IDX",idx)
    }
  },
  data() {
    return {
    }
  },
};
</script>

<style>
</style>