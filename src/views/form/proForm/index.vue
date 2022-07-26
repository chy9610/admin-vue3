<template>
    <div>
        <el-alert title="通过 component :is 组件属性 && v-bind 属性透传，可以将 template 中的 html 代码全部改变为 columns 配置项，具体配置请看代码。"
            type="warning" :closable="false" />
        <component is="el-form" v-bind="options.form" ref="proFormRef" :model="model">
            <template v-for="item in options.columns" :key="item.prop">
                <component is="el-form-item" v-bind="item.formItem">
                    <component :is="`el-${item.attrs.typeName}`" v-bind="item.attrs"
                        v-model="model[item.formItem.prop]" />
                </component>
            </template>
            <el-form-item>
                <slot name="operation"></slot>
            </el-form-item>
        </component>
    </div>
</template>

<script lang="ts" setup name="proForm">
import { ref } from 'vue';

let model = ref<any>({});

const options = ref({
    form: {
        inline: false,
        labelPosition: 'right',
        labelWidth: '100px',
        size: 'default',
        disabled: true,
        labelSuffix: ':'
    },
    columns: [
        {
            formItem: {
                label: '用户名',
                prop: "userName",
                required: true
            },
            attrs: {
                typeName: 'input',
                clearable: true,
                placeholder: '请输入用户名',
                disabled: true
            }
        }, {
            formItem: {
                label: '密码',
                prop: "password",
                required: true,
                class: "data"
            },
            attrs: {
                typeName: 'input',
                clearable: true,
                placeholder: '请输入密码',
                type: 'password'
            }
        },
        {
            formItem: {
                label: '邮箱',
                prop: "email",
            },
            attrs: {
                typeName: 'input',
                clearable: true,
                placeholder: '请输入密码',
                style: "width: 500px"
            }
        }
    ]
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>