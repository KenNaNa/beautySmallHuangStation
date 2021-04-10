<template>
  <view class="self-introduction-wrap">
    <image
      style="width: 60px; height: 60px"
      mode="aspectFit"
      src="../../assets/img.jpg"
    />
    <view class="text">
      <text class="account">{{ account }}</text>
      <text class="introduction">{{ introduction }}</text>
    </view>
    <van-icon name="arrow" size="24" @click="clickRight" />
  </view>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      default: "../../assets/img.jpg",
    },
    account: {
      type: String,
      default: "账号：123123456",
    },
    introduction: {
      type: String,
      default: "简介：我是一只小小小小鸟",
    },
  },
  name: "SelfIntroduction",
  setup(props) {
    const { ctx } = getCurrentInstance();
    const clickRight = (e) => {
      ctx.$emit("click-right-arrow", e);
    };

    return {
      clickRight,
    };
  },
});
</script>
<style lang="scss" scoped>
.self-introduction-wrap {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  image {
    border-radius: 10px;
  }
  .text {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    .account {
      margin-bottom: 20px;
      font-weight: bold;
      text-align: left;
    }
    .introdution {
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>
