<template>
    <el-form ref="loginFormRef" class="login-form-main" :model="loginForm" :rules="loginRules" size="large">
        <el-form-item class="form-item" prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名：admin/user">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <user />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password
                autocomplete="new-password">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <lock />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
    <div class="btn-item">
        <el-button class="btn" :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
        <el-button class="btn" :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary"
            :loading="loading">
            登录
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { ElForm, ElMessage } from "element-plus";
import { Login } from "@/api/interface";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";
import { MenuStore } from "@/store/modules/menu";
import { TabsStore } from "@/store/modules/tabs";
import md5 from "js-md5";

const globalStore = GlobalStore();
const menuStore = MenuStore();
const tabStore = TabsStore();

// 定义 formRef 的校验规则
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()

const loginRules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loginForm = reactive<Login.ReqLoginForm>({
    username: 'admin',
    password: '123456'
})

const loading = ref<boolean>(false)
const router = useRouter();

onMounted(() => {
    // 监听enter事件（调用登录）
    document.onkeydown = (e: any) => {
        e = window.event || e;
        if (e.code === "Enter" || e.code === "enter") {
            if (loading.value) return;
            login(loginFormRef.value);
        }
    };
})

const login = (formEl: FormInstance | undefined) => {
    console.log('键盘事件触发')
    if (!formEl) return;

    formEl.validate(async (valid) => {
        console.log(valid)
        if (valid) {
            loading.value = true;
            try {
                const requestLoginForm = {
                    username: loginForm.username,
                    password: md5(loginForm.password)
                }
                const res = await loginApi(requestLoginForm);
                // 本地缓存 Token
                globalStore.setToken(res?.data.access_token)
                // 登录成功之后，清除原有的 menuList 和 tabs 数据
                menuStore.setMenuList([]);
                tabStore.closeMultipleTab();

                ElMessage.success('登录成功！')
                router.push({ path: '/home' });
            } finally {
                loading.value = false;
            }
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields()
}

</script>

<style lang="scss" scoped>
.form-item {
    margin-bottom: 40px;
}

.btn-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
        width: 185px;
    }
}
</style>