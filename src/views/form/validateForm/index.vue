<template>
    <el-form ref="ruleFormRef" status-icon :model="formData" :rules="rules" label-width="120px">
        <el-form-item label="活动名称:" prop="name">
            <el-input v-model="formData.name" placeholder="please input your name" />
        </el-form-item>
        <el-form-item label="活动联系方式:" prop="phone">
            <el-input v-model="formData.phone" placeholder="Activity phone" />
        </el-form-item>
        <el-form-item label="活动举办城市:" prop="region">
            <el-select v-model="formData.region" placeholder="please select your zone">
                <el-option label="Zone shanghai" value="shanghai" />
                <el-option label="Zone beijing" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="活动日期:" prop="date">
            <el-date-picker v-model="formData.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="即时交付:" prop="delivery">
            <el-switch v-model="formData.delivery" />
        </el-form-item>
        <el-form-item label="活动类型:" prop="type">
            <el-checkbox-group v-model="formData.type">
                <el-checkbox label="Online Activities" name="type" />
                <el-checkbox label="Promotion Activities" name="type" />
                <el-checkbox label="Offline Activities" name="type" />
                <el-checkbox label="Simple brand Activities" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="活动资源:" prop="resource">
            <el-radio-group v-model="formData.resource">
                <el-radio label="赞助商" />
                <el-radio label="会场" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动介绍:" prop="desc">
            <el-input v-model="formData.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
            <el-button @click="onReset(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { checkPhoneNumber } from "@/utils/eleValidate";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";

const ruleFormRef = ref<FormInstance>()

const formData = reactive({
    name: '',
    phone: '',
    region: '',
    date: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const rules = reactive<FormRules>({
    name: [
        { required: true, message: "Please input Activity name", trigger: "blur" },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
    ],
    phone: [{ required: true, validator: checkPhoneNumber, trigger: "blur" }],
    region: [
        {
            required: true,
            message: "Please select Activity zone",
            trigger: "change"
        }
    ],
    date: [
        {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
        }
    ],
    resource: [
        {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
        }
    ],
    desc: [
        {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur'
        }
    ]
})

// Submit Form
const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            ElMessage({
                type: 'success',
                message: "提交的数据为 : " + JSON.stringify(formData)
            });
        } else {
            console.error("error submit!", fields);
        }
    })
}
const onReset = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    console.log(formEl.resetFields)
    formEl.resetFields()
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>