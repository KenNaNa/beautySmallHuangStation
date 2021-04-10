<template>
  <view class="nav-bar-wrap">
    <van-nav-bar left-arrow v-bind="$attrs" />
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
});
</script>
<style lang="scss" scoped>
.nav-bar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
