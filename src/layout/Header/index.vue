<template>
    <div class="header-main">
        <div class="header-lf flx-center">
            <CollapseIcon></CollapseIcon>
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="header-ri flx-center">
            <!-- <AssemblySize></AssemblySize>
            <Language></Language> -->
            <SearchMenu></SearchMenu>
            <Theme></Theme>
            <Fullscreen></Fullscreen>
            <div class="userInfo-main flx-center">
                <span class="username">Geeker</span>
                <Avatar></Avatar>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Fullscreen from "./components/Fullscreen.vue";
import SearchMenu from "./components/SearchMenu.vue";
import Avatar from "./components/Avatar.vue";
import Theme from "./components/Theme.vue";
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>