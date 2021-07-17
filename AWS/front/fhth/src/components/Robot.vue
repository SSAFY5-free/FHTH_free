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
  <el-card id="Robot" shadow="always" :body-style="{ padding: '20px' }">
    <div slot="header">
      <el-select v-model="value" placeholder="Select" @change="selected(value)">
        <el-option
          v-for="(robot, idx) in lst.robots"
          :key="robot.name"
          :label="robot.name"
          :value="idx"
        >
        </el-option>
      </el-select>
    </div>

    <!-- card body -->

    <!-- <p>robot_id : {{ lst }}</p> -->
    <!-- <p>robots : {{ robots }}</p> -->
    <div style="display: flex"></div>
    <div id="screen" class="bc"></div>
    <div id="keyPad">
      <div>
        <div></div>
        <div>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-caret-top"
            @click="onClick('top')"
          ></el-button>
        </div>

        <div></div>
      </div>
      <div>
        <div>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-caret-left"
            @click="onClick('left')"
          ></el-button>
        </div>
        <div></div>
        <div>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-caret-right"
            @click="onClick('right')"
          ></el-button>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-caret-bottom"
            @click="onClick('bottom')"
          ></el-button>
        </div>
        <div></div>
      </div>
    </div>
  </el-card>
</template>

<script>
// import { mapGetters} from 'vuex'
import { mapState } from "vuex";
import { commandAPI } from "./../utils/axios";
// import { baseURL, port } from "../utils/conf";
// import io from "vue-socket.io";
export default {
  computed: {
    // ...mapGetters("mainInfo", ["GET_ROBOT_ID"]),
    ...mapState("mainInfo", ["robots", "cur", "lst"]),
    socket() {
      return this.$socket;
    },
    curRobot_idx() {
      return this.cur.robot_idx;
    },
  },
  methods: {
    selected(idx) {
      alert("here");
      this.cur.robot_idx = idx;
    },
    onClick(direction) {
      // this.socket.emit("command", { direction });
      console.log(this.socket);
      commandAPI.moveRobot(direction);
    },
  },
  created() {
    console.log("here : ", this.$socket);
  },
};
</script>
<style>
</style>