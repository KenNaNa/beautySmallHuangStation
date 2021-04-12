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
    let input = (e: any) => {
      ctx.$emit("input", e.target.value);
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
    };
  },
});
</script>
<style lang="scss" scoped>
.search-input-wrap {
  padding: 0 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    flex: 2;
  }
}
</style>
