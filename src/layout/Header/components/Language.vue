<template>
    <el-dropdown trigger="click" @command="handleSetLanguage">
        <span>
            <el-tooltip effect="dark" content="国际化" placement="bottom">
                <i :class="'iconfont icon-zhongyingwen'" class="icon-style"></i>
            </el-tooltip>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :disabled="language && language === 'zh'" command="zh">简体中文</el-dropdown-item>
                <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
import { GlobalStore } from '@/store';
import { getBrowserLang } from "@/utils/util";

const i18n = useI18n();
const globalStore = GlobalStore();

const language = computed((): string => globalStore.language)

const handleSetLanguage = (lang: string) => {
    i18n.locale.value = lang;
    globalStore.setLanguage(lang);
}
onMounted(() => {
    handleSetLanguage(language.value || getBrowserLang());
})
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>