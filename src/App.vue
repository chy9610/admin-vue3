<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { useAppStore } from '@/store/modules/app/index';
const appStore = useAppStore()
const locale = appStore.$state.localeLanguage;
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

a,
a:focus,
a:hover {
  color: inherit;
  outline: none;
  text-decoration: none;
}
</style>
