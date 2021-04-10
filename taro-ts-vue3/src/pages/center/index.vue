<template>
  <view class="center-wrap">
    <self-introduction @click-right-arrow="clickRightArrow"></self-introduction>

    <!-- 我的专辑 -->
    <van-cell center class="same" title="我的专辑" is-link @click="toMyAlbum" />

    <!-- 我的收藏 -->
    <van-cell
      center
      class="same"
      title="我的收藏"
      is-link
      @click="toMyCollection"
    />

    <!-- 我的订单 -->
    <van-cell center class="same" title="我的订单" is-link @click="toMyOrder" />
  </view>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import SelfIntroduction from "../../components/SelfIntroduction/index.vue";
import "./index.scss";

export default defineComponent({
  name: "Center",
  components: {
    "self-introduction": SelfIntroduction,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const clickRightArrow = () => {
      ctx.$taro.navigateTo({
        url: "/pages/accountDetail/index",
      });
    };

    const toMyAlbum = () => {
      ctx.$taro.navigateTo({
        url: "/pages/myAlbum/index",
      });
    };

    const toMyCollection = () => {
      ctx.$taro.navigateTo({
        url: "/pages/myCollection/index",
      });
    };

    const toMyOrder = () => {
      ctx.$taro.navigateTo({
        url: "/pages/myOrder/index",
      });
    };

    return {
      clickRightArrow,
      toMyAlbum,
      toMyCollection,
      toMyOrder,
    };
  },
});
</script>
