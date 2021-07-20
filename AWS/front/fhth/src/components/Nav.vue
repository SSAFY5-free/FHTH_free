<template>
  <el-menu
    id="Nav"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item id="img" style="margin-left: 50px">
      <h1>FHTH</h1>
    </el-menu-item>
    <el-menu-item index="1">Hello, {{ email }}</el-menu-item>
    <!-- <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    <el-menu-item index="3" disabled>Info</el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("userInfo", ["name", "email"]),
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
</style>