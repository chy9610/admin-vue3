<template>
  <div class="side_bar_logo">
    <transition>
      <router-link v-if="collapse" to="/">
        <img src="favicon.ico" class="sidebar-logo"
      /></router-link>
      <router-link v-else to="/">
        <img src="favicon.ico" class="sidebar-logo" />
        <h1>Yellow<span style="color: red">Docker</span>管理</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  collapse: Boolean,
});
</script>

<style lang="scss" scoped></style>
