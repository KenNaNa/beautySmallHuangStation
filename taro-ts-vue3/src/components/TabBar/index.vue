<template>
  <view class="tab-bar-wrap">
    <van-tabbar v-bind="$attrs">
      <router-link
        :key="index"
        v-for="(item, index) in tabList"
        :to="item.path"
      >
        <van-tabbar-item :name="item.name" :icon="item.icon">
          {{ item.text }}
        </van-tabbar-item>
      </router-link>
    </van-tabbar>
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TabBar",
  props: {
    tabList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {},
});
</script>
<style lang="scss" scoped>
.tab-bar-wrap {
  :deep(.van-tabbar) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
