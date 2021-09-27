<template>
  <el-card id="Robot" shadow="always" :body-style="{ padding: '20px' }">
    <div slot="header">
      <el-select v-model="value" placeholder="Select" @change="onChange(value)">
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
    <div id="screen" class="bc">
      <img src="http://172.30.1.22:8080/?action=stream" alt="" />
    </div>
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("mainInfo", ["robots", "cur", "lst"]),
    curRobot_idx() {
      return this.cur.robot_idx;
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChange(idx) {
      this.cur.robot_idx = idx;
    },
    onClick(direction) {
      const robot_id = this.robots[this.cur.robot_idx]._id;
      this.$store.dispatch("userInfo/EMIT_SOCKET", {
        namespace: "command",
        data: {
          robot_id,
          direction,
        },
      });
    },
  },
};
</script>
<style>
</style>