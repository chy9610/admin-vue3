<template>
  <el-container class="app-wrapper">
    <el-aside class="aside-wrap">
      <SideBar />
    </el-aside>
    <el-container>
      <el-header class="header-wrap">头部导航</el-header>
      <el-main>内容区域</el-main>
      <el-footer>底部区域</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import SideBar from "./side_bar/index.vue";
</script>

<style lang="scss" scoped>
.aside-wrap {
  width: 200px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.header-wrap {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
