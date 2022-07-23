<template>
    <el-tooltip effect="dark" :content="isFullscreen ? '退出全屏' : '全屏'">
        <i :class="['icon-style', 'iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" @click="toggle"></i>
    </el-tooltip>
</template>

<script lang="ts" setup>
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>