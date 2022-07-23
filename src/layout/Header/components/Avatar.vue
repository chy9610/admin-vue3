<template>
    <el-dropdown trigger="click">
        <el-tooltip effect="dark" content="Ducker" placement="bottom">
            <img class="avatar" src="@/assets/images/duck.gif" alt="avatar">
        </el-tooltip>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="openDialog('infoRef')">{{ $t("header.personalData") }}</el-dropdown-item>
                <el-dropdown-item @click="openDialog('passwordRef')">{{ $t("header.changePassword") }}
                </el-dropdown-item>
                <el-dropdown-item @click="loginOut" dived>{{ $t("header.logout") }}</el-dropdown-item>
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