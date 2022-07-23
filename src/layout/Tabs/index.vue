<template>
    <div class="tabs-main">
        <div class="tabs-menu">
            <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
                <el-tab-pane v-for="item in tabsMenuList" :key="item.path" :path="item.path" :label="item.title"
                    :name="item.path" :closable="item.close">
                    <template #label>
                        <el-icon class="tabs-icon" v-if="item.icon">
                            <component :is="item.icon"></component>
                        </el-icon>
                        {{ item.title }}
                    </template>
                </el-tab-pane>
            </el-tabs>
            <more-button></more-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { TabsPaneContext } from "element-plus";
import { TabsStore } from '@/store/modules/tabs';
import { useRoute, useRouter } from "vue-router";
import MoreButton from './components/MoreButton.vue';

const tabsStore = TabsStore();
const tabsMenuList = computed(() => tabsStore.tabsMenuList)
const tabsMenuValue = computed({
    get: () => {
        return tabsStore.tabsMenuValue;
    },
    set: (val) => {
        tabsStore.setTabsMenuValue(val)
    }
})

const route = useRoute();
const router = useRouter();

// Listening for Route Changes 
watch(
    () => route.path,
    () => {
        let params = {
            title: route.meta.title as string,
            path: route.path,
            close: true
        }
        tabsStore.addTabs(params);
    },
    { immediate: true }
)

// Tab Click
const tabClick = (tabsItem: TabsPaneContext) => {
    let path = tabsItem.props.name as string;
    router.push(path)
}

// Remove Tab
const removeTab = (activePath: string) => {
    tabsStore.removeTabs(activePath)
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>