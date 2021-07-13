<template>
  <div id="ModuleView">
    <div id="ModuleContent" class="bc">
    ModuleView
    </div>
    {{ module }}
    <!-- {{this.$store.state.mainInfo.cur.module_idx}} -->
    <dev1 v-if="module.type_id == '60ed57dfca9e496b485c20da'" v-bind:module = "module"></dev1>
    <dev2 v-if="module.type_id == '60ed57e5ca9e496b485c20e0'" v-bind:module = "module"></dev2>
  </div>
</template>
<script>
import dev1 from "./ModuleView/dev1.vue"
import dev2 from "./ModuleView/dev2.vue"
export default {
  components: {
    dev1,dev2
  },props: ["module"],
  mounted() {
    console.log("mounted")
    this.$socket.on("module", (data) => {
        const {module_data} = data
        // console.log("get from server : " , module_data)
        this.$store.commit("mainInfo/SET_MODULE_DATA",{module_data})
      })
    setInterval(() => {
      this.$socket.emit("module", this.module)
    }, 2000)
  },
};
</script>

<style>
</style>