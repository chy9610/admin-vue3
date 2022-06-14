<template>
  <div class="side-item">
    <template v-if="theOnlyOneChild">
      <menu-item :index="resolvePath(theOnlyOneChild.path)"> </menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup>
import path from 'path'
import { computed, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
import { isExternal } from "@/utils/validate";

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    default: () => {},
  },
  basePath: {
    type: String,
    default: "",
  },
});

// 显示菜单子节点个数
const showingChildNumber = computed(() => {
  // 节点数据中存在子元素
  if (props.item.children) {
    // 子节点渲染条件集合
    const showingChildren = props.item.children.filter((item) => {
      if (item.meta && item.meta.hidden) {
        return false;
      } else {
        return true;
      }
    });

    return showingChildren.length;
  }

  return 0;
});

// 只存在一个节点
const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }

  // 如果存在子节点则返回
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  // If there is no children, return itself with path removed,
  // because this.basePath already conatins item's path information
  return { ...props.item, path: "" };
});

// 补全路径
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style lang="scss" scoped>
.side-item {
  color: green;
}
</style>
