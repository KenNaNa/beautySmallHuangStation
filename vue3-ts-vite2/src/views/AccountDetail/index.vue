<template>
  <div class="account-detail-wrap">
    <nav-bar title="账号详情" @click-left="clickLeft"></nav-bar>
    <div class="account-detail">
      <img src="../../assets/img.jpg" width="80" height="80" />
      <span class="account">{{ account }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar/index.vue";
import { getLocalStorage } from "@/utils/localStorage";
export default defineComponent({
  name: "AccountDetail",
  components: {
    "nav-bar": NavBar,
  },
  setup() {
    const account = JSON.parse(getLocalStorage("userInfo")).username;
    const router = useRouter();
    const clickLeft = () => {
      router.go(-1);
    };

    return {
      clickLeft,
      account,
    };
  },
});
</script>
<style lang="scss" scoped>
.account-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: calc(100vh - 50px);
  overflow: hidden;
}
</style>
