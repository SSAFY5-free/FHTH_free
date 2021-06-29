<template>
  <div id="Main">
    <p> It is main vue </p>
    <p v-for="deviceStatus in lstDeviceStatus" :key="deviceStatus.id">
     ● Serial Number : {{deviceStatus.serial}} <br> ● Type : {{deviceStatus.type}} <br> ● Status : {{deviceStatus.status}}
    <!-- {{deviceStatus}} -->
    </p>
</div>
</template>
<script>
import {deviceAPI} from "@/utils/axios"
export default {
  data() {
    return {
      lstDeviceStatus : []
    }
  },
  async mounted () {
    this.lstDeviceStatus = (await deviceAPI.getMainInfo()).data
    // lstDeviceStatus.map()
    // console.log(JSON.stringify(lstDeviceStatus.data[0]))
    // for(key in JSON.stringify(lstDeviceStatus.data[0])) {
    
  }
}
</script>

<style>

</style>