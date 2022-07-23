<template>
    <el-dropdown trigger="click">
        <div class="avatar">
            <img src="@/assets/images/avatar.gif" alt="avatar">
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="openDialog('infoRef')">用户信息</el-dropdown-item>
                <el-dropdown-item @click="openDialog('passwordRef')">用户密码</el-dropdown-item>
                <el-dropdown-item @click="loginOut" dived>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <!-- infoDialog -->
    <InfoDialog ref="infoRef"></InfoDialog>
    <!-- passwordDialog -->
    <PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script lang="ts" setup>
import InfoDialog from './InfoDialog.vue';
import PasswordDialog from './PasswordDialog.vue';

import { ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { GlobalStore } from '@/store';
const router = useRouter();
const globalStore = GlobalStore();

const loginOut = () => {
    ElMessageBox.confirm('您是否确认退出登录？', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        router.push({ name: 'login' })
        globalStore.setToken('');
        ElMessage({
            type: 'success',
            message: "退出登录成功！"
        })
    })
}

interface DialogExpose {
    openDialog: () => void
}
const infoRef = ref<DialogExpose | null>(null)
const passwordRef = ref<DialogExpose | null>(null)

// Open Dialog
const openDialog = (refName: string) => {
    if (refName === 'infoRef') return infoRef.value?.openDialog()
    passwordRef.value?.openDialog();
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>