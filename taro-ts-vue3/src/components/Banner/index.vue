<template>
  <view class="swipe-content">
    <van-swipe
      class="my-swipe"
      :autoplay="2000"
      indicator-color="white"
      lazy-render
    >
      <van-swipe-item v-for="item in bannerData" :key="item.id">
        <img
          :src="item.images"
          class="img"
          :alt="item.title"
          @click="toDetail(item)"
        />
      </van-swipe-item>
    </van-swipe>
  </view>
</template>
<script>
import { getCurrentInstance } from "vue";
export default {
  name: "Banner",
  props: {
    bannerData: {
      type: Array,
    },
  },
  setup(props) {
    const { ctx } = getCurrentInstance();
    const toDetail = (item) => {
      ctx.$taro.navigateTo({
        url: `/pages/detail/index?item=${JSON.stringify(item)}`,
      });
    };

    return {
      toDetail,
    };
  },
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
.my-swipe {
  width: 100%;
}
.my-swipe .van-swipe-item {
  width: 100%;
  //   color: #fff;
  font-size: 1rem;
  //   line-height: 6rem;
  text-align: center;
  background-color: #fff;
}
</style>
