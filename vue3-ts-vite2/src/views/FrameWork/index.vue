<template>
  <div class="framework-wrap">
    <tab-bar v-model="state.active" :tab-list="tabList"></tab-bar>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, defineComponent } from "vue";
import { useRoute } from "vue-router";
interface TabList {
  name?: string;
  icon?: string;
  text?: string;
  path?: string;
}

let tabList: Array<TabList> = [
  {
    name: "home",
    path: "/framework/home",
    icon: "home-o",
    text: "首页",
  },
  {
    name: "add",
    path: "/framework/add",
    icon: "add-o",
    text: "添加",
  },
  {
    name: "center",
    path: "/framework/center",
    icon: "setting-o",
    text: "中心",
  },
];

import TabBar from "@/components/TabBar/index.vue";

const route = useRoute();

console.log("route", route.path.split("/"));

defineComponent({
  components: {
    "tab-bar": TabBar,
  },
});

// 定义响应式数据
const state = reactive({
  active: route.path.split("/")[2] || "home",
  tabList: tabList,
});
</script>
<style lang="scss" scoped>
.framework-wrap {
  height: 100%;
}
</style>
