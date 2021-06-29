<template>
  <div id="SignUp">
    <el-form
      :model="form"
      status-icon
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="id">
        <el-input type="id" v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="pw">
        <el-input type="id" v-model="form.pw" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="deviceId">
        <el-input v-model="form.deviceId"></el-input>
      </el-form-item>

      <el-form-item label="" size="normal">
        <!-- <add-device :deviceList="list"></add-device> -->
      </el-form-item>

      <div id= "registedDevices">
      <!-- dynamic form -->
      <el-form-item  v-for="device in form.registedDevices" :key="device.id" :label="String(device.validation)" size="normal">
        <add-device id @update="validationCheck" :deviceList="deviceList" :data="device"  ></add-device>
      </el-form-item>

      </div>

      <el-form-item>
      <el-button @click="addDomain">새 디바이스</el-button>
        <el-button type="primary" @click="onSubmit">회원 가입</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userAPI, deviceAPI } from "../utils/axios";
import addDevice from "./addDevice.vue";
export default {
  components: {
    addDevice,
  },
  data() {
    return {
      form: {
        email: "",
        pw: "",
        registedDevices: [{
          id : 0,
          type:'',
          serial:'',
          validation : 0 
          }
        ],
      },
      registedDevicesCount :0,
      deviceList:[]
    };
  },
  methods: {
    async onSubmit() {
      const result = await userAPI.signup(this.form);
      console.log(result);
    },
    addDomain() {
      this.form.registedDevices.push({
        id : ++(this.registedDevicesCount),
        type:'',
        serial:'',
        validation:0
      })
      // document.querySelector("#registedDevices").innerHTML += d
    },
    validationCheck(data) {
      this.form.registedDevices[data.id].validation = data.validation
      console.log("Zz", this.form.registedDevices[Number(data.id)].validation)
    }
  },
  async created() {
    let result = await deviceAPI.getDeviceList();
    console.log(result.data.data)

    this.deviceList = result.data.data.reduce((acc,cur,idx) => {
      acc.push({id:idx, type:cur})
      return acc
    }, [])
  },
};
</script>

<style>
</style>