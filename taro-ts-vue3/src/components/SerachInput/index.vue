<template>
  <div class="search-input-wrap">
    <van-search
      :value="value"
      v-bind="$attrs"
      placeholder="请输入搜索关键词"
      :clearable="true"
      :autofocus="true"
      input-align="left"
      @input="input"
    />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "SearchInput",
  setup() {
    let value = ref("");
    let { ctx } = getCurrentInstance();
    let input = (e: any) => {
      ctx.$emit("input", e.target.value);
    };
    return {
      value,
      input,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
