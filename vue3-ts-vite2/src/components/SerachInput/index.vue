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
      @keyup.enter="change"
      @clear="clear"
      class="search"
    />
    <van-icon name="play-circle-o" size="20" @click="logout" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "SearchInput",
  setup() {
    let value = ref("");
    let route = useRoute();
    let router = useRouter();
    let { ctx } = getCurrentInstance();
    // 应该要用防抖策略来消除多次触发问题
    let input = (e: any) => {
      ctx.$emit("input", e.target.value);
    };

    let change = (e: any) => {
      ctx.$emit("change", e);
    };

    let clear = (e: any) => {
      ctx.$emit("clear", e);
    };

    let logout = () => {
      window.localStorage.clear();
      if (route.path !== "/login") {
        router.push("/login");
      }
    };
    return {
      value,
      input,
      logout,
      change,
      clear,
    };
  },
});
</script>
<style lang="scss" scoped>
.search-input-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 0 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    flex: 2;
  }
}
</style>
