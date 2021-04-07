<template>
  <div class="detail-wrap">
    <nav-bar :title="item.title" @click-left="clickLeft"></nav-bar>
    <div class="img" v-for="(img, index) in item.imgs" :key="index">
      <img :src="img" class="img" />
    </div>
    <action-bar
      @onTalk="onTalk"
      @onLike="onLike"
      @onCollect="onCollect"
      @onBuy="onBuy"
    ></action-bar>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs, computed } from "vue";
import ActionBar from "@/components/ActionBar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
export default {
  name: "Detail",
  components: {
    "action-bar": ActionBar,
    "nav-bar": NavBar,
  },
  setup(props) {
    interface Data {
      id?: string | Array<string>;
      item?: string | string[];
    }
    let data: Data = {
      id: "",
      item: "",
    };
    const state = reactive(data);

    const route = useRoute();
    const router = useRouter();
    const item = computed(() => route.params.item).value;
    state.id = computed(() => route.params.id).value;
    state.item = JSON.parse(item);

    // 评论
    const onTalk = (e: any) => {
      console.log(e);
    };
    // 点赞
    const onLike = (e: any) => {
      console.log(e);
    };
    // 收集
    const onCollect = (e: any) => {
      console.log(e);
    };

    // 购买
    const onBuy = (e: any) => {
      console.log(e);
    };

    // 点击返回按钮
    const clickLeft = () => {
      router.go(-1);
    };

    return {
      ...toRefs(state),
      onTalk,
      onLike,
      onCollect,
      onBuy,
      clickLeft,
    };
  },
};
</script>

<style lang="scss" scoped>
.detail-wrap {
  width: 100%;
  padding-bottom: 55.2px;
  .title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #cccc;
    font-size: 20px;
    margin-block-start: 0;
    margin-block-end: 0;
    background-color: #2c323c;
  }
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>

