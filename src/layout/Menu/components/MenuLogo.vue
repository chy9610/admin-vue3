<template>
  <div class="side_bar_logo" :class="collapse ? 'collapse' : 'notitle'">
    <transition name="sidebarLogoFade">
      <router-link class="sidebar-logo-link" to="/">
        <img src="favicon.ico" class="sidebar-logo" />
        <h1 class="title" v-show="!collapse">Duck Admin</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
});
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.side_bar_logo {
  position: relative;
  width: 100%;
  height: 55px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #282a35;
  box-shadow: 2px 0 6px #00152959;
  background-color: #191a20;

  .sidebar-logo {
    display: inline-block;
    object-fit: contain;
    height: 60%;
  }

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      color: red;
      font-size: 22px;
      margin-left: 8px;
      font-weight: bold;
    }
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
