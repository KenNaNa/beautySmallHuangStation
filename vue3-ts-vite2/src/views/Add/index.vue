<template>
  <div class="add-wrap">
    <div class="list"></div>
    <div class="content">
      <van-icon name="plus" @click="show = true" />
    </div>
    <van-overlay :show="show" @click="show = false" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Add",
  setup(props) {
    const show = ref(false);

    return {
      show,
    };
  },
});
</script>
<style lang="scss" scoped>
.add-wrap {
  padding: 10px;
}
.content {
  width: 88px;
  height: 88px;
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
