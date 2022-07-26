<template>
    <el-form :mode="formData" label-width="120px">
        <el-form-item label="活动名称:">
            <el-input v-model="formData.name" placeholder="please input your name" />
        </el-form-item>
        <el-form-item label="活动联系方式:">
            <el-input v-model="formData.phone" placeholder="Activity phone" />
        </el-form-item>
        <el-form-item label="活动举办城市:">
            <el-select v-model="formData.region" placeholder="please select your zone">
                <el-option label="Zone shanghai" value="shanghai" />
                <el-option label="Zone beijing" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="活动日期:">
            <el-date-picker v-model="formData.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="即时交付:">
            <el-switch v-model="formData.delivery" />
        </el-form-item>
        <el-form-item label="活动类型:">
            <el-checkbox-group v-model="formData.type">
                <el-checkbox label="Online Activities" name="type" />
                <el-checkbox label="Promotion Activities" name="type" />
                <el-checkbox label="Offline Activities" name="type" />
                <el-checkbox label="Simple brand Activities" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="活动资源:">
            <el-radio-group v-model="formData.resource">
                <el-radio label="赞助商" />
                <el-radio label="会场" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动介绍:">
            <el-input v-model="formData.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ElMessage } from 'element-plus'

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

// Submit Form
const onSubmit = () => {
    ElMessage({
        type: 'success',
        message: "提交的数据为 : " + JSON.stringify(formData)
    });
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>