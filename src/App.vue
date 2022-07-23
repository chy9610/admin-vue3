
<template>
  <el-config-provider :locale="i18Locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { GlobalStore } from "@/store";

// 配置element中英文
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

const globalStore = GlobalStore();

const i18Locale = computed(() => {
  if (!globalStore.language) {
    return en
  }
  if (globalStore.language === 'zh') return zhCn;
  if (globalStore.language === 'en') return en;
})

// element 大小
// const assemblySize = computed((): string => globalStore.assemblySize)
// : size ="assemblySize"
</script>

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
