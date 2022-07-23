<template>
    <el-dialog v-model="dialogVisible" :title="$t('header.changePassword')" width=" 500px" draggable>
        <span>This is userInfo</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">{{ $t("dialog.cancel") }}</el-button>
                <el-button type="primary" @click="dialogVisible = false">{{ $t("dialog.confirm") }}</el-button>
            </span>
        </template>
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