<template>
  <div class="active-bar-wrap">
    <van-action-bar v-bind="$attrs">
      <van-action-bar-icon icon="chat-o" text="评论" @click="onTalk" />
      <van-action-bar-icon icon="like-o" text="点赞" @click="onLike" />
      <van-action-bar-icon
        icon="shopping-cart-o"
        text="收藏"
        @click="onCollect"
      />
      <van-action-bar-button
        color="#7232dd"
        type="danger"
        text="立即购买"
        @click="onBuy"
      />
    </van-action-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "ActionBar",
  setup(props) {
    const { ctx } = getCurrentInstance();

    const onCollect = (e: any) => {
      ctx.$emit("onCollect", e);
    };

    const onLike = (e: any) => {
      ctx.$emit("onLike", e);
    };

    const onBuy = (e: any) => {
      ctx.$emit("onBuy", e);
    };

    const onTalk = (e: any) => {
      ctx.$emit("onTalk", e);
    };

    return {
      onCollect,
      onLike,
      onBuy,
      onTalk,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
