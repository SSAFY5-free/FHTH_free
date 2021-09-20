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
  props: ["keyword", "command", "payload"],
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
      const robot = this.robots[this.cur.robot_idx];
      const robot_id = robot.id;
      const module_id = robot.modules_id[this.cur.module_idx];
      const command = this.command;
      const payload = this.payload;

      console.log("AsyncBtn : ", robot_id, module_id);

      this.isLoading = true;
      await moduleAPI
        .command({ robot_id, module_id, command, payload })
        .catch((error) => {
          error;
          alert("커맨드 실행에 실패했습니다");
        });
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>