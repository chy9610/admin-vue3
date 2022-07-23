<template>
    <el-dialog v-model="dialogVisible" title="用户信息" width="500px" draggable>
        <span>This is userInfo</span>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dialogVisible = ref(false);

// openDialog
const openDialog = () => {
    dialogVisible.value = true;
};
defineExpose({
    openDialog
})
</script>