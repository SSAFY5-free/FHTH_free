<template>
  <div id="dev2">
    <!-- <div slot="header" class="clearfix"> -->
    <!-- <span>dev1 : {{ module.name }}</span> -->
    <!-- </div> -->

    <!-- 모듈 이미지 -->
    <!-- <div id="describe">img</div> -->

    <!-- 모듈 이름 -->
    <!-- <p>status of {{ module.name }}</p> -->
    <div id="info">
      <h1>Info</h1>
      <div style="display: flex">
        <div>
          <span class="demonstration">마신 시간</span>
          <el-date-picker
            v-model="data.timeWater"
            type="datetime"
            placeholder="Select date and time"
          >
          </el-date-picker>
        </div>
        <div style="flex: 1">
          <el-progress
            :percentage="data.left"
            :color="colors"
            type="circle"
          ></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsyncBtn from "./AsyncBtn.vue";
import DateTimePicker from "../element-ui/dateTimePicker.vue";
import moment from "moment";
export default {
  components: {},
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
          keyword: "예약",
          command: "reserve",
        },
        {
          keyword: "밥주기",
          command: "feed",
        },
      ],
      data: this.module.data,
    };
  },
  methods: {
    onClick() {},
    seteatTime(date) {
      this.eatTime = moment(date).toDate();
    },
  },
};
</script>

<style>
</style>