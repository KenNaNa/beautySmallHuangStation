<template>
  <view class="add-wrap">
    <view class="list"></view>
    <view class="content">
      <van-icon name="plus" @click="show = true" />
    </view>
    <van-overlay :show="show" @click="show = false" />
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import "./index.scss";
export default defineComponent({
  name: "Add",
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
});
</script>
