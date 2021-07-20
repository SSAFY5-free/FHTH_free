<template>
  <el-card id="ModuleView" class="box-card">
    <!-- <p>module : {{ module }}</p> -->
    <!-- <p>modules : {{ modules }}</p> -->
    <div slot="header">
      <h1>{{ module.name }}</h1>
    </div>
    <!-- {{ this.$store.state.mainInfo.cur.module_idx }} -->
    <dev1
      v-if="module.type_id == '60ee76affa275a06227b3c4a'"
      v-bind:module="module"
    ></dev1>
    <dev2
      v-if="module.type_id == '60ee76a5fa275a06227b3c48'"
      v-bind:module="module"
    ></dev2>
  </el-card>
</template>
<script>
import dev1 from "./ModuleView/dev1.vue";
import dev2 from "./ModuleView/dev2.vue";
import { mapState } from "vuex";
// import io from "socket.io-client";
// import { baseURL, port } from "./utils/conf";
export default {
  components: {
    dev1,
    dev2,
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