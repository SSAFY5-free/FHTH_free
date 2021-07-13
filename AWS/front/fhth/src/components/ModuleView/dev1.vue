<template>
  <div id="dev1">
    <p>dev1</p>
     <!-- {{module}} -->
     {{module.module_data.value1}}
     {{module.module_data.value2}}

     <p><el-button type="primary" size="default" @click="onClick">밥주기</el-button></p>
     
  </div>
</template>

<script>
export default {
    props:["module"]
    ,methods : {
      onClick() {
        console.log("zz")
      }
    }
}
</script>

<style>

</style>