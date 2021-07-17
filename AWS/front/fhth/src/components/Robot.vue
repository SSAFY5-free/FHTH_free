<template>
  <el-card id="Robot" shadow="always" :body-style="{ padding: '20px' }">
    <div slot="header">
      <el-dropdown
        style="width: 100%"
        split-button
        type="primary"
        trigger="click"
        @command="selected"
      >
        {{ robots[cur.robot_idx].name }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(robot, idx) in lst.robots"
            :key="robot.name"
            :curRobot="idx"
            >{{ robot.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="(robot, idx) in lst.robots"
        :key="robot.name"
        :label="robot.name"
        :value="idx"
      >
      </el-option>
    </el-select> -->

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
  data() {
    return {
      curRobot: "",
    };
  },
  computed: {
    // ...mapGetters("mainInfo", ["GET_ROBOT_ID"]),
    ...mapState("mainInfo", ["robots", "cur", "lst"]),
    socket() {
      return this.$socket;
    },
  },
  methods: {
    selected(idx) {
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