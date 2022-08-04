<template>
    <div class="content-box">
        <div class="add flx-align-center">
            <el-input v-model="defaultValue" plain placeholder="请输入默认值"></el-input>
            <el-button type="primary" @click="addDomain">新增输入项</el-button>
        </div>
        <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" class="demo-dynamicV">
            <el-form-item label="邮箱：" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
            </el-form-item>
            <el-form-item v-for="(domain, index) in form.domains" :key="index" :label="'Domain' + index" prop="common">
                <el-input v-model="domain.value" :placeholder="'请输入Domain' + index">
                    <template #append>
                        <el-button type="danger" plain class="mt-2" @click.prevent="removeDomain(domain)">删除
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="submitForm(formRef)">提交</el-button>
                <el-button @click="resetForm(formRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';

interface DomainItem {
    key: number;
    value: string;
}

const formRef = ref<FormInstance>()
const defaultValue = ref("");
const form = reactive<{
    email: string,
    domains: Array<DomainItem>
}>({
    email: '',
    domains: [{
        key: 1,
        value: ""
    }]
})
const rules = reactive<FormRules>({
    email: [
        {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
        }
    ],
    common: [
        {
            required: true,
            message: '该项不能为空',
            trigger: 'blur'
        }
    ]
})

// 新增动态表单项
const addDomain = () => {
    form.domains.push({
        key: Date.now(),
        value: defaultValue.value
    });
    defaultValue.value = ''
}
// 删除动态表单项
const removeDomain = (domainItem: DomainItem) => {
    form.domains = form.domains.filter(item => item.key !== domainItem.key)
};
// 提交表单
const submitForm = (el: FormInstance | undefined) => {
    if (!el) return
    el.validate((valid) => {
        if (valid) {
            ElMessage({ type: 'success', message: '成功提交' })
            resetForm(el)
        } else {
            ElMessage({ type: 'warning', message: '请将必要信息填写完整！' })
        }
    })
};
// 重置表单
const resetForm = (el: FormInstance | undefined) => {
    if (!el) return
    el.resetFields();
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>