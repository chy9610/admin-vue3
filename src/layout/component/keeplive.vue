<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const cachedViews = () => store.$state.tagViews.cachedViews;
const key = () => route.path;
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
