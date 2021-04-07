<template>
  <div class="home">
    <search-input v-model="state.searchValue"></search-input>
    <banner :bannerData="state.bannerData"></banner>
    <van-loading color="#1989fa" v-if="state.loading" />
    <tab-bar v-model="state.active" :tab-list="tabList"></tab-bar>
  </div>
</template>
<script lang="ts" setup="props">
import {
  reactive,
  onMounted,
  getCurrentInstance,
  defineComponent,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getBannerList } from "../../api/index";
interface TabList {
  name?: string;
  icon?: string;
  text?: string;
}

let tabList: Array<TabList> = [
  {
    name: "home",
    icon: "home-o",
    text: "首页",
  },
  {
    name: "add",
    icon: "add-o",
    text: "添加",
  },
  {
    name: "setting",
    icon: "setting-o",
    text: "中心",
  },
];

import SearchInput from "@/components/SearchInput/index.vue";
import TabBar from "@/components/TabBar/index.vue";

defineComponent({
  components: {
    "search-input": SearchInput,
    "tab-bar": TabBar,
  },
});

const router = useRouter();
const store = useStore();

// 获取上下文对象
const { ctx } = getCurrentInstance();

// 定义响应式数据
const state = reactive({
  color: "#ccc",
  bannerData: [],
  loading: false,
  searchValue: "",
  active: "home",
  tabList: tabList,
});

const initFN = () => {
  ctx.$toast({
    type: "fail",
    message: "请求失败",
  });
  state.loading = false;
};

// DOM 加载完成后更新数据
onMounted(() => {
  state.loading = true;
  getBannerList()
    .then(
      (res: any) => {
        state.loading = false;
        state.bannerData = res.data;
        ctx.$toast({
          type: "success",
          message: "请求成功",
        });
        console.log(res);
      },
      (error) => {
        initFN();
      }
    )
    .catch((error) => {
      initFN();
    });
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.text {
  color: v-bind("state.color");
  font-size: 20px;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: #2c323c;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
