<template>
  <template v-for="menuItem in menuList" :key="item.path">
    <el-sub-menu v-if="menuItem.children && menuItem.children.length" :index="menuItem.path">
      <template #title>
        <el-icon>
          <component :is="menuItem.icon"></component>
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <menu-item :menuList="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path" :route="menuItem.path">
      <el-icon>
        <component :is="menuItem.icon"></component>
      </el-icon>
      <template v-if="!menuItem.isLink">
        <span>{{ menuItem.title }}</span>
      </template>
      <template v-else>
        <a class="link" :href="menuItem.isLink" target="_blank">{{ menuItem.title }}</a>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
defineProps<{ menuList: Menu.MenuOptions[] }>();
</script>

<style lang="scss" scoped>
.link {
  color: green;
}
</style>
