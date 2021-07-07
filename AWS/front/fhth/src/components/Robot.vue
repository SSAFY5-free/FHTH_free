<template>
  <div id="Robot" class="bc">
      <p> Robot </p>
      {{robots[cur.robot_idx].id}}
      <!-- {{robots[cur.robot_idx]}} -->
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import {mapState} from 'vuex'

export default {
    computed : {
        ...mapGetters("mainInfo", ["GET_ROBOT_ID"]),
        ...mapState('mainInfo', ['robots', "cur"])
    },
    methods: {
    },
    async mounted() {
        
    },
    method() {
    }
}
</script>
<style>
</style>