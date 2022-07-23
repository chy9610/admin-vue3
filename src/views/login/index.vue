<template>
    <div class="login-wrap flex-center">
        <div class="login-main">
            <div class="login-left">
                <img src="@/assets/images/login_left0.png" alt="login" />
            </div>
            <div class="login-form">
                <div class="login-logo">
                    <img class="logo-icon" src="@assets/images/duck.svg" alt="logo" />
                    <p>Duck-Admin</p>
                </div>
                <login-form ref="loginRef" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue';
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
