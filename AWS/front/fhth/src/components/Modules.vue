<template>
  <div id="moduels" class="bc">
      <p> Modules</p>
      {{robots[cur.robot_idx].modules}}
      <!-- {{robots[cur.robot_idx].modules}} -->
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"
export default {
  computed : {
    ...mapGetters("mainInfo", ["GET_ROBOT_ID"]),
      ...mapState('mainInfo', ['robots', "cur"])
  },
}
</script>

<style>

</style>