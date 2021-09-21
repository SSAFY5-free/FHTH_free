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

      <el-form
        ref="form"
        :model="form"
        label-width="120px"
        label-position="left"
      >
        <el-form-item label="Last time">
          <el-date-picker
            type="datetime"
            placeholder="동작 내역이 없습니다"
            :value="module.data.timeEaten"
            :readonly="true"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Remain feed">
          <el-progress
            :percentage="module.data.numEaten"
            :color="colors"
          ></el-progress>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" id="control">
      <div slot="header" class="clearfix header">
        <b>Control</b>
      </div>
      <div style="display: flex; justify-content: center">
        <date-time-picker></date-time-picker>
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
      value: " ",
      form: {},
    };
  },
  methods: {
    onClick() {},
    seteatTime(date) {
      this.eatTime = moment(date).toDate();
    },
  },
  updated() {
    console.log("hihi");
    this.value = this.module.data.timeEaten;
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