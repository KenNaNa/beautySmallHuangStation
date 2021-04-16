<template>
  <div class="self-introduction-wrap">
    <img width="80" height="80" src="../../assets/img.jpg" />
    <!-- <div class="text">
      <span class="account">账号：{{ account }}</span>
      <span class="introduction">简介：{{ introduction }}</span>
    </div> -->
    <van-icon name="arrow" size="24" @click="clickRight" />
  </div>
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
      default: "123123456",
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
  img {
    border-radius: 10px;
  }
  .text {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    span {
      text-align: left;
    }
    span.account {
      margin-bottom: 20px;
      font-weight: bold;
    }
    span.introdution {
      font-size: 14px;
    }
  }
}
</style>
