<template>
  <el-card id="ModuleView" class="box-card">
    <!-- <p>module : {{ module }}</p> -->
    <!-- <p>modules : {{ modules }}</p> -->
    <div slot="header" class="header">
      <b>{{ module.name }}</b>
    </div>
    <!-- {{ this.$store.state.mainInfo.cur.module_idx }} -->
    <div id="moduleStatus">
      <dev1 v-if="module.type_id == '1'" v-bind:module="module"></dev1>
      <dev2 v-if="module.type_id == '2'" v-bind:module="module"></dev2>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>History</h1>
      </div>
      <history id="moduleHistory" :actions="module.actions"></history>
    </el-card>
  </el-card>
</template>
<script>
import dev1 from "./ModuleView/dev1.vue";
import dev2 from "./ModuleView/dev2.vue";
import history from "./ModuleView/history.vue";
import { mapState } from "vuex";
export default {
  components: {
    dev1,
    dev2,
    history,
  },
  computed: {
    ...mapState("mainInfo", ["robots", "cur"]),
  },
  props: ["modules", "module"],
  mounted() {
    console.log("mounted");
  },
};
</script>

<style>
</style>