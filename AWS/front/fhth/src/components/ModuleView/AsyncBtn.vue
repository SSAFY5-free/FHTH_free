<template>
  <el-button
    type="primary"
    size="default"
    :loading="isLoading"
    @click="onClick"
  >
    {{ keyword }}
  </el-button>
</template>

<script>
import { moduleAPI } from "../../utils/axios";
import { mapState } from "vuex";
export default {
  props: ["keyword", "command"],
  computed: {
    ...mapState("mainInfo", ["robots", "cur"]),
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async onClick() {
      this.isLoading = true;
      const robot = this.robots[this.cur.robot_idx];
      const robot_id = robot._id;
      const module_id = robot.modules_id[this.cur.module_idx];
      const command = this.command;

      // this.$store.dispatch("userInfo/EMIT_SOCKET", {
      //   namespace: "command",
      //   data: {
      //     robot_id,
      //     module_id,
      //     command,
      //   },
      // });
      // console.log(robot_id, module_id);
      console.log(await moduleAPI.command({ robot_id, module_id, command }));

      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>