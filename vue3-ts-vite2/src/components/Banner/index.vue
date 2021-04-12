<template>
  <div class="swipe-content">
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
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "Banner",
  props: {
    bannerData: {
      type: Array,
    },
  },
  setup(props) {
    const router = useRouter();
    const toDetail = (item) => {
      router.push({
        name: "Detail",
        params: {
          id: item.id,
          item: JSON.stringify(item),
        },
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
  height: calc(100% - 54px - 50px);
}
.van-swipe-item {
  height: calc(100% - 54px - 50px);
}
.swipe-content {
  padding-top: 54px;
}
.my-swipe {
  width: 100%;
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: calc(100vh - 50px);
  //   color: #fff;
  font-size: 1rem;
  //   line-height: 6rem;
  text-align: center;
  background-color: #fff;
}
</style>
