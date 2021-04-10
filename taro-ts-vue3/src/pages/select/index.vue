<template>
  <view class="select-wrap">
    <van-radio-group
      v-model="state.checked"
      direction="horizontal"
      :icon-size="30"
      @change="change"
    >
      <van-radio name="1">男</van-radio>
      <van-radio name="2">女</van-radio>
    </van-radio-group>
  </view>
</template>

<script lang="ts" setup="props">
import { reactive, getCurrentInstance } from "vue";
import "./index.scss";
const state = reactive({
  checked: "",
});
const { ctx } = getCurrentInstance();

const change = (e: string) => {
  const num = parseInt(e);
  switch (num) {
    case 1:
      console.log("男");
      ctx.$toast({
        type: "text",
        message: "暂无帅哥",
      });
      break;
    case 2:
      console.log("女");
      setTimeout(() => {
        ctx.$taro.navigateTo({
          url: "/pages/home/index",
        });
      }, 1000);
      break;
    default:
  }
};
</script>
