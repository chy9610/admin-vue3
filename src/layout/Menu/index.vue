<template>
  <div class="menu-wrap" v-loading="loading">
    <menu-logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :router="true" :collapse="isCollapse" :collapse-transition="false"
        background-color="#191a20" text-color="#bdbdc0" active-text-color="#fff">
        <menu-item :menuList="menuList" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { MenuStore } from "@/store/modules/menu";
import { AuthStore } from "@/store/modules/auth";
import { getMenuList } from "@/api/modules/login";
import { handlerRouter } from "@/utils/util";
import MenuLogo from "./MenuLogo.vue";
import MenuItem from "./MenuItem.vue";

const route = useRoute();
const authStore = AuthStore();
const menuStore = MenuStore();

let loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await getMenuList()
    if (!res.data) return;
    // 返回动态路由信息
    const dynamicRouter = handlerRouter(res.data);
    // 设置路由
    authStore.setAuthRouter(dynamicRouter);
    // 设置菜单
    menuStore.setMenuList(res.data);
  } finally {
    loading.value = false;
  }
})

const activeMenu = computed((): string => route.path);
const isCollapse = computed((): boolean => menuStore.isCollapse);
const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList)

// aside 自适应宽度
const screenWidth = ref<number>(0);
// 监听窗口大小，合并aside
const listenWindow = () => {
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth;
      if (!isCollapse.value && screenWidth.value <= 1200) menuStore.setCollapse();
      if (isCollapse.value && screenWidth.value > 1200) menuStore.setCollapse();
    })();
  };
}
listenWindow();
</script>

<style lang="scss" scoped>
.menu-wrap {
  width: 100%;
  height: 100%;
  // background-color: #409EFF;
  background-color: #ffffff;
}
</style>
