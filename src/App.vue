
<template>
  <el-config-provider :locale="i18Locale" :button="config" :size="assemblySize">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { ElConfigProvider } from "element-plus";
import { GlobalStore } from "@/store";

// 配置element中英文
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

const globalStore = GlobalStore();

// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false
})
// 国际化配置
const i18Locale = computed(() => {
  if (!globalStore.language) {
    return en
  }
  if (globalStore.language === 'zh') return zhCn;
  if (globalStore.language === 'en') return en;
})

// element 大小
const assemblySize: any = computed((): string => globalStore.assemblySize)
</script>

