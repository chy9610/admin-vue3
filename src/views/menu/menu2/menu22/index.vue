<template>
    <div class="content-box">
        <span class="text">我是menu2-2 🍓🍇🍈🍉</span>
        <el-input v-model="value" placeholder="测试缓存"></el-input>
    </div>
</template>

<script setup lang="ts" name="menu21">
import { ref } from "vue";
const value = ref<string>("");
</script>
