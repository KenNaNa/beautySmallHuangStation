<template>
  <view class="my-collection-wrap">
    <nav-bar title="我的收藏" @click-left="clickLeft"></nav-bar>
  </view>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import NavBar from "../../components/NavBar/index.vue";
export default defineComponent({
  name: "MyCollection",
  components: {
    "nav-bar": NavBar,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const clickLeft = () => {
      ctx.$taro.navigateBack({
        delta: 1,
      });
    };

    return {
      clickLeft,
    };
  },
});
</script>
<style lang="">
</style>
