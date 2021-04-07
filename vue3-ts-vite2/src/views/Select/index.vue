<template>
  <div class="select-wrap">
    <van-radio-group
      v-model="state.checked"
      direction="horizontal"
      :icon-size="30"
      @change="change"
    >
      <van-radio name="1">男</van-radio>
      <van-radio name="2">女</van-radio>
    </van-radio-group>
  </div>
</template>

<script lang="ts" setup="props">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const state = ref({
  checked: ""
});
const { ctx } = getCurrentInstance();

const change = (e: string) => {
  const num = parseInt(e);
  switch (num) {
    case 1:
      console.log("男");
      ctx.$toast({
        type: "text",
        message: "暂无帅哥"
      });
      break;
    case 2:
      console.log("女");
      setTimeout(() => {
        router.push("/");
      }, 1000);
      break;
    default:
  }
};
</script>

<style lang="scss" scoped>
.select-wrap {
  width: 100%;
  height: 100%;
  background-color: #ebfff0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  ::v-deep .van-radio__label {
    font-size: 30px;
  }
}
</style>
