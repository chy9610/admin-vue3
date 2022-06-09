<script setup lang="ts">
// import AdminDashboard from './admin/index.vue'
// import EditorDashboard from './editor/index.vue'
import { useStore } from "../../store";

const store = useStore();


// $patch
store.$patch({
  userName: store.userName + "222",
});

setTimeout(() => {
  store.setCount();
  console.log(store.$state.counter);
}, 2000);
</script>

<template>
  <div class="dashboard-container">
    {{ store.$state.userName }}
    <div class="title">{{ store.getUserName }}</div>
    <component :is=""></component>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #ff0000;
  .title {
      color: $red-font;
      font-weight: 600;
      background-color: green;
  }
}
</style>
