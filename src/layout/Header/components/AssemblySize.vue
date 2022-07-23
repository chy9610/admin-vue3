<template>
    <el-dropdown trigger="click" @command="handleSetAssemblySize">
        <span>
            <el-tooltip effect="dark" content="组件大小" placement="bottom">
                <i :class="'iconfont icon-contentright'" class="icon-style"></i>
            </el-tooltip>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :disabled="assemblySize === 'default'" command="default">
                    {{ $t('assembly.default') }}
                </el-dropdown-item>
                <el-dropdown-item :disabled="assemblySize === 'large'" command="large">
                    {{ $t('assembly.large') }}
                </el-dropdown-item>
                <el-dropdown-item :disabled="assemblySize === 'small'" command="small">
                    {{ $t('assembly.small') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { GlobalStore } from '@/store';

const globalStore = GlobalStore();

const assemblySize = computed((): string => globalStore.assemblySize)

const assemblySizeListCh = reactive<{ [propName: string]: any }>({
    default: "默认",
    large: "大型",
    small: "小型"
});
const assemblySizeList = reactive<string[]>(['default', 'large', 'small'])
const handleSetAssemblySize = (size: string) => {
    // if (assemblySize.value === size) return;
    globalStore.setAssemblySize(size);
}
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>