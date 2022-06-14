<template>
  <div class="side_bar-wrap">
    <sidebar-logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="!isCollapse"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="menuActiveTextColor"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store/index";
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./SidebarItem.vue";

const store = useStore();
const route = useRoute();

const showLogo = computed(() => store.$state.settings.showSidebarLogo);
const variables = computed(() => store.$state.settings.variables);
const routes = computed(() => store.$state.permission.routes);
const sidebar = computed(() => store.$state.app.sidebar);

const isCollapse = computed(() => sidebar.value.opened);

const menuActiveTextColor = computed(() => {
  if (store.$state.settings.sidebarTextTheme) {
    return store.$state.settings.theme;
  } else {
    return variables.value.menuActiveText;
  }
});

const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta && meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="scss" scoped>
.side_bar-wrap {
  width: 100%;
  height: 100%;
  // background-color: #409EFF;
  background-color: #ffffff;
}
</style>
