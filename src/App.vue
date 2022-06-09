<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import DashBoard from "./views/dashboard/index.vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;

</script>

<template>
  <el-config-provider :locale="locale">
    <DashBoard />
  </el-config-provider>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>