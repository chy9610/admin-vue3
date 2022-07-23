<template>
    <div class="layout-search-dialog">
        <el-tooltip effect="dark" content="菜单搜索" placement="bottom">
            <i @click="openDialog" class="icon-style iconfont icon-sousuo"></i>
        </el-tooltip>
        <el-dialog v-model="isShowSearch" width="300px" destroy-on-close :modal="false" fullscreen :show-close="false">
            <el-autocomplete ref="menuInputRef" placeholder="菜单搜索：支持菜单名称、路径" v-model="searchMenu"
                :fetch-suggestions="searchMenuList" clearable @select="handleClickMenu" @blur="closeDialog">
                <template #prefix>
                    <el-icon>
                        <Search />
                    </el-icon>
                </template>
                <template #default="{ item }">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span> {{ item.title }}</span>
                </template>
            </el-autocomplete>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { MenuStore } from '@/store/modules/menu';
const router = useRouter();
const menuStore = MenuStore();
const menuList = computed(() => menuStore.menuList)

const menuInputRef = ref()
const isShowSearch = ref(false);
const searchMenu = ref("")

const openDialog = () => {
    isShowSearch.value = true;
    searchMenu.value = "";
    nextTick(() => {
        setTimeout(() => {
            menuInputRef.value.focus();
        });
        setTimeout(() => {
            menuInputRef.value.blur();
        }, 3000)
    });
}
const closeDialog = () => {
    alert('失去焦点')
    isShowSearch.value = false;
}
// 筛选菜单
const filterNodeMethod = (queryString: string) => {
    return (restaurant: Menu.MenuOptions) => (
        restaurant.path.toLowerCase().indexOf(queryString.toLowerCase()) > -1 ||
        restaurant.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    );
};
// 筛选菜单
const searchMenuList = (queryString: string, cb: Function) => {
    const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value;
    cb(results);
};
// 点击菜单
const handleClickMenu = (menuItem: Menu.MenuOptions) => {
    searchMenu.value = '';
    if (menuItem.isLink) window.open(menuItem.isLink, '_blank')
    router.push(menuItem.path)
    closeDialog();
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>