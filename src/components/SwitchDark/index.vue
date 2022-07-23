
<template>
    <el-switch v-model="themeConfig.isDark" @change="switchDark" inline-prompt active-color="#0a0a0a"
        inactive-color="#dcdfe6" :active-icon="Sunny" :inactive-icon="Moon" />
</template>

<script lang="ts" setup name="switchDark">
import { computed } from 'vue';
import { GlobalStore } from '@/store';
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useTheme } from "@/hooks/useTheme";

const globalStore = GlobalStore();
const { switchDark } = useTheme();
const themeConfig = computed(() => globalStore.themeConfig)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>