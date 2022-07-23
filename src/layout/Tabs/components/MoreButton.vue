<template>
    <el-dropdown trigger="click">
        <el-button size="small" type="primary">
            <span>更多</span>
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="closeCurrentTab">关闭当前项</el-dropdown-item>
                <el-dropdown-item @click="closeOtherTab">关闭其他项</el-dropdown-item>
                <el-dropdown-item @click="closeAllTab">关闭所有项</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { HOME_URL } from "@/config/config";
import { TabsStore } from "@/store/modules/tabs";

const tabsStore = TabsStore()

// Close Current
const closeCurrentTab = () => {
    if (tabsStore.tabsMenuValue === HOME_URL) return;
    tabsStore.removeTabs(tabsStore.tabsMenuValue);
}

// Close Other
const closeOtherTab = () => {
    tabsStore.closeMultipleTab(tabsStore.tabsMenuValue);
};

// Close All
const closeAllTab = () => {
    tabsStore.closeMultipleTab();
    tabsStore.goHome();
}
</script>