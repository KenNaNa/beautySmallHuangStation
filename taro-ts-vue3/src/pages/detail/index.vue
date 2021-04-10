<template>
  <view class="detail-wrap">
    <nav-bar :title="item.title" @click-left="clickLeft"></nav-bar>
    <view class="img" v-for="(img, index) in item.imgs" :key="index">
      <image :src="img" class="img" />
    </view>
    <action-bar
      @onTalk="onTalk"
      @onLike="onLike"
      @onCollect="onCollect"
      @onBuy="onBuy"
    ></action-bar>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, computed, getCurrentInstance } from "vue";
import ActionBar from "../../components/ActionBar/index.vue";
import NavBar from "../../components/NavBar/index.vue";
import "./index.scss";
export default {
  name: "Detail",
  components: {
    ActionBar,
    NavBar,
  },
  setup() {
    interface Data {
      id?: string | Array<string>;
      item?: Object;
    }
    let data: Data = {
      id: "",
      item: Object,
    };
    const state = reactive(data);

    const { ctx } = getCurrentInstance();
    state.item = computed(() =>
      JSON.parse(ctx.$taro.getCurrentInstance().router.params.item)
    ).value;
    state.id = computed(() => state.item.id).value;
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
      ctx.$taro.navigateBack({
        delta: 1,
      });
    };
    return {
      ...toRefs(state),
      clickLeft,
      onBuy,
      onCollect,
      onLike,
      onTalk,
    };
  },
};
</script>
