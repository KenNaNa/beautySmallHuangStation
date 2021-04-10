<template>
  <div class="center-wrap">
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
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import SelfIntroduction from "@/components/SelfIntroduction/index.vue";

export default defineComponent({
  name: "Center",
  components: {
    "self-introduction": SelfIntroduction,
  },
  setup(props) {
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    const clickRightArrow = () => {
      router.push("/accountdetail");
    };

    const toMyAlbum = () => {
      router.push("/myalbum");
    };

    const toMyCollection = () => {
      router.push("/mycollection");
    };

    const toMyOrder = () => {
      router.push("/myorder");
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
<style lang="scss" scoped>
.center-wrap {
  background-color: rgb(240, 240, 240);
  height: 100%;
  .same {
    margin-top: 10px;
    text-align: left;
    height: 50px;
  }
}
</style>
