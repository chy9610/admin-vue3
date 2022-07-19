<template>
  <div class="side_bar_logo" :class="collapse ? 'collapse' : 'notitle'">
    <transition name="sidebarLogoFade">
      <router-link class="sidebar-logo-link" v-if="!collapse" to="/">
        <img src="favicon.ico" class="sidebar-logo" />
      </router-link>
      <router-link class="sidebar-logo-link collapse" v-else to="/">
        <img src="favicon.ico" class="sidebar-logo" />
        <h1 style="color: red">Duck Admin</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
});
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.side_bar_logo {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  margin-bottom: 30px;
  margin-top: 20px;

  .sidebar-logo {
    display: inline-block;
    height: 100%;
  }

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 12px;
    }
  }

  &.notitle {
    .sidebar-title {
      display: none;
    }

    & .sidebar-logo {
      height: 60%;
    }
  }
}
</style>
