<template>
  <div class="account-detail-wrap">
    <nav-bar title="账号详情" @click-left="clickLeft"></nav-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar/index.vue";
export default defineComponent({
  name: "AccountDetail",
  components: {
    "nav-bar": NavBar,
  },
  setup(props) {
    const router = useRouter();
    const clickLeft = () => {
      router.go(-1);
    };

    return {
      clickLeft,
    };
  },
});
</script>
<style lang="">
</style>
