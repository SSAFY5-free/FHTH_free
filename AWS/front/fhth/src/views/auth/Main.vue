<template>
  <div id="Main" style="height:100%">
    <p> It is main vue </p>
    <!-- <p v-for="deviceStatus in lstDeviceStatus" :key="deviceStatus.id">
     ● Serial Number : {{deviceStatus.serial}} <br> ● Type : {{deviceStatus.type}} <br> ● Status : {{deviceStatus.status}}
    </p> -->
    <!-- <side-bar>fffj</side-bar>1
     -->
  <el-row class="tac" style="display:flex;height:500px">
  <el-col :span="10" >
      <h5>Custom colors</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
      </el-col>
</el-row>
</div>
</template>
<script>

import {mapState, mapMutations} from "vuex"
// import SideBar from '../../components/SideBar.vue'
import {robotAPI, moduleAPI} from "../../utils/axios"
export default {
  components: {
    // SideBar
  },
  computed: {
    ...mapState('userInfo', ["user_email", "robots_id", "modules_data"]),
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations("userInfo", ["SET_ROBOTS_ID","SET_MODULES_ID"])
  },
  async mounted () {
    console.log("mounted : " , this.userInfo)
    
    //Ver1
    if(!this.$store.getters["userInfo/GET_ROBOTS_ID.length"]) {
    const robots_id = (await robotAPI.getRobots()).data
    this.SET_ROBOTS_ID(robots_id)
     

    //set robot's modules_id
      for (let i = 0; i < robots_id.length;i++) {
        const {data} = await moduleAPI.getModules({"robot_id" : robots_id[i]})
        const {modules_id} = data
        this.SET_MODULES_ID({modules_id, robot_id : robots_id[i]})
      }
    }
  }
}
</script>

<style>

</style>