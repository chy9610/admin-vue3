<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-container class="container">
      <!-- 头部 -->
      <el-header>
        <Header></Header>
        <Tabs></Tabs>
      </el-header>
      <!-- 内容区域 -->
      <el-main class="main">
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="cacheRouter">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
      <!-- 底部 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
import Footer from "./Footer/index.vue";
import cacheRouter from "@/routers/cacheRouter";
import { onMounted } from "vue";
import { AuthStore } from "@/store/modules/auth";
import { getAuthButtons } from "@/api/modules/login";

const authStore = AuthStore();

// 获取权限信息
onMounted(async () => {
  const res = await getAuthButtons();
  res.data && authStore.setAuthButtons(res.data)
})

</script>

<style lang="scss" scoped>
@import'./index.scss';
</style>
