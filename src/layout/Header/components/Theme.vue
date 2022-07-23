<template>
    <el-tooltip effect="dark" content="布局设置" placement="bottom">
        <i class="icon-style iconfont icon-zhuti" @click="openDrawer"></i>
    </el-tooltip>
    <el-drawer v-model="drawerVisitable" title='布局设置' size="300px">
        <el-divider class="divider">
            <el-icon>
                <ColdDrink />
            </el-icon>
            全局主题
        </el-divider>
        <div class="theme-item">
            <span>主题色</span>
            <el-color-picker v-model="themeConfig.primary" :predefine="colorList" @change="changePrimary">
            </el-color-picker>
        </div>
        <div class="theme-item">
            <span>暗黑模式</span>
            <switch-dark></switch-dark>
        </div>
        <div class="theme-item">
            <span>灰色模式</span>
            <el-switch v-model="themeConfig.isGrey" @change="changeGreyOrWeak($event, 'grey')"></el-switch>
        </div>
        <div class="theme-item">
            <span>色弱模式</span>
            <el-switch v-model="themeConfig.isWeak" @change="changeGreyOrWeak($event, 'weak')"></el-switch>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useTheme } from "@/hooks/useTheme";
import { GlobalStore } from '@/store';
import SwitchDark from "@/components/SwitchDark/index.vue";

// 预定义主题颜色
const colorList = ["#409EFF", "#DAA96E", "#0C819F", "#009688", "#27ae60", "#ff5c93", "#e74c3c", "#fd726d", "#f39c12", "#9b59b6"];

// 初始化主题
const globalStore = GlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
const { changePrimary, changeGreyOrWeak } = useTheme();

const drawerVisitable = ref(false)


// Open Drawer
const openDrawer = () => {
    drawerVisitable.value = true;
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>