<template>
  <view class="account-detail-wrap">
    <nav-bar title="账号详情" @click-left="clickLeft"></nav-bar>
  </view>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import NavBar from "../../components/NavBar/index.vue";
export default defineComponent({
  name: "AccountDetail",
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
