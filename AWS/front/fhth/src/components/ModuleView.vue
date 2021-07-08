<template>
  <div id="ModuleView">
    <div id="ModuleContent" class="bc">
    ModuleView
    </div>
    {{ curModule[midx].type_id }}
    <!-- {{this.$store.state.mainInfo.cur.module_idx}} -->
    <dev1 v-if="curModule[midx].type_id == '60e16a243d78505adcf1de84'" v-bind:module = "curModule[midx]"></dev1>
    <dev2 v-if="curModule[midx].type_id == '60e17160ba2b2c1d1405e233'" v-bind:module = "curModule[midx]"></dev2>
  </div>
</template>
<script>
import dev1 from "./ModuleView/dev1.vue"
import dev2 from "./ModuleView/dev2.vue"
export default {
  components: {
    dev1,dev2
  },
  computed: {
    curModule() {
      return this.$store.state.mainInfo.robots[
        this.$store.state.mainInfo.cur.robot_idx
      ].modules
    },
    ridx() {
      return this.$store.state.mainInfo.cur.robot_idx
    },
    midx() {
      return this.$store.state.mainInfo.cur.module_idx
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>