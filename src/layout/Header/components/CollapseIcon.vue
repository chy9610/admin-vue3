<template>
    <el-icon class="collapse-icon" @click="menuStore.setCollapse()">
        <component :is="isCollapse ? 'expand' : 'fold'"></component>
    </el-icon>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { MenuStore } from "@/store/modules/menu";
const menuStore = MenuStore();
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>