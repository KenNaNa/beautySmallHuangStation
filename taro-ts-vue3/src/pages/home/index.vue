<template>
  <view class="home">
    <AtSearchBar v-model:value="state.value" @action-click="onActionClick" />
    <banner :bannerData="state.bannerData"></banner>
    <van-loading color="#1989fa" v-if="state.loading" />
  </view>
</template>
<script lang="ts" setup="props">
import { reactive, onMounted, getCurrentInstance, defineComponent } from "vue";
import { getBannerList } from "../../api/index";
import "./index.scss";
import { AtSearchBar } from "taro-ui-vue3";

defineComponent({
  AtSearchBar,
});
// 获取上下文对象
const { ctx } = getCurrentInstance();

// 定义响应式数据
const state = reactive({
  color: "#ccc",
  bannerData: [],
  loading: false,
  value: "",
});

const onActionClick = (e: any) => {
  console.log("onActionClick", e);
};

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
        console.log("bannerData", state.bannerData);
        ctx.$toast({
          type: "success",
          message: "请求成功",
        });
      },
      () => {
        initFN();
      }
    )
    .catch(() => {
      initFN();
    });
});
</script>
