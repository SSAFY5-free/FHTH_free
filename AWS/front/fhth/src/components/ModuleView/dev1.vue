<template>
  <div id="dev1">
    <!-- <div slot="header" class="clearfix"> -->
    <!-- <span>dev1 : {{ module.name }}</span> -->
    <!-- </div> -->

    <!-- 모듈 사진 -->
    <!-- <div id="describe">img</div> -->

    <!-- 모듈 정보 -->
    <!-- <p>{{ module.data.numEaten }}</p> -->
    <!-- <p>{{ value.numEaten }}</p> -->
    <!-- {{ value.numEaten }} -->

    <el-card class="box-card" id="info">
      <div slot="header" class="clearfix header">
        <b>Info</b>
      </div>
      <div id="eatTime">
        <!-- <span class="demonstration">먹은 시간</span> -->
        <p>
          {{ module.data.timeEaten }}
        </p>
      </div>
      <div id="remain">
        <el-progress
          :percentage="module.data.numEaten"
          :color="colors"
          type="circle"
        ></el-progress>
      </div>
    </el-card>
    <el-card class="box-card" id="control">
      <div slot="header" class="clearfix header">
        <b>Control</b>
      </div>
      <div style="display: flex; justify-content: center">
        <date-time-picker></date-time-picker>
        <!-- <async-btn
          v-for="command in lstCommand"
          :key="command.keyword"
          :keyword="command.keyword"
          :command="command.command"
        ></async-btn> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import AsyncBtn from "./AsyncBtn.vue";
import DateTimePicker from "../element-ui/dateTimePicker.vue";
import moment from "moment";
export default {
  components: {
    // AsyncBtn,
    DateTimePicker,
  },
  componets: {
    AsyncBtn,
    DateTimePicker,
  },
  props: ["module"],
  data() {
    return {
      //progress circle 색 종류
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],

      //버튼 종류
      lstCommand: [
        {
          keyword: "밥주기",
          command: "feed",
        },
      ],
      value: "",
    };
  },
  methods: {
    onClick() {},
    seteatTime(date) {
      this.eatTime = moment(date).toDate();
    },
  },
  updated() {
    this.value = this.module.data;
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