<template>
  <div id="Robot" class="bc">
      <!-- <p> Robot </p> -->
      <!-- {{robots[cur.robot_idx].id}} -->
          <!-- {{robots[cur.robot_idx]}} -->
        <div style="widht:400px;height:300px;margin: 40px 30px" class="bc">
          <img src="http://172.30.1.22:8080/?action=stream" alt="" style="width:400px; height:300px;">
        </div>
        <div id = "KeyPad" style="display:flex" class="bc">
          <div >
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
        </div>
  </div>
</template>

<script>
// import { mapGetters} from 'vuex'
import {mapState} from 'vuex'

export default {
    computed : {
        // ...mapGetters("mainInfo", ["GET_ROBOT_ID"]),
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