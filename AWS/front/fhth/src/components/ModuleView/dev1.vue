<template>
  <div>
    <div slot="header" class="clearfix">
      <!-- <span>dev1 : {{ module.name }}</span> -->
    </div>
    <div id="view">
      <div id="describe">img</div>
      <div id="control">
        <!-- <p>status of {{ module.name }}</p> -->
        {{ module.data.value1 }}
        <el-progress
          :percentage="module.data.value1"
          :color="colors"
        ></el-progress>
        {{ module.data.value2 }}
        <el-progress
          :percentage="module.data.value2"
          :color="colors"
        ></el-progress>

        <async-btn
          v-for="command in lstCommand"
          :key="command.keyword"
          :keyword="command.keyword"
          :command="command.command"
        ></async-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AsyncBtn from "./AsyncBtn.vue";
export default {
  components: { AsyncBtn },
  componets: {
    AsyncBtn,
  },
  props: ["module"],
  data() {
    return {
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      lstCommand: [
        {
          keyword: "밥주기",
          command: "feed",
        },
      ],
    };
  },
  methods: {
    onClick() {},
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>