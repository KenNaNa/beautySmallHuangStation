<template>
  <div class="detail-wrap">
    <nav-bar :title="item.title" @click-left="clickLeft"></nav-bar>
    <div class="img-wrap">
      <div class="img" v-for="(img, index) in item.imgs" :key="index">
        <img :src="img" class="img" />
      </div>
    </div>
    <action-bar
      @onTalk="onTalk"
      @onLike="onLike"
      @onCollect="onCollect"
      @onBuy="onBuy"
    ></action-bar>
    <van-loading color="#1989fa" v-if="loading" />
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs, computed, onMounted } from "vue";
import ActionBar from "@/components/ActionBar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import { getDetailById } from "@/api/banner";
export default {
  name: "Detail",
  components: {
    "action-bar": ActionBar,
    "nav-bar": NavBar,
  },
  setup() {
    interface Data {
      id?: string | Array<string>;
      item?: Object;
      loading?: Boolean;
    }
    let data: Data = {
      id: "",
      item: {},
      loading: false,
    };
    const state = reactive(data);

    const route = useRoute();
    const router = useRouter();
    state.id = computed(() => route.params.id).value;

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

    // onMounted 加载数据
    onMounted(() => {
      state.loading = true;
      getDetailById({ id: state.id })
        .then((res) => {
          state.loading = false;
          console.log("res", res);
          state.item = res.banners[0];
        })
        .catch(() => {
          state.loading = false;
        });
    });

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
  .img-wrap {
    margin-top: 50px;
  }
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
