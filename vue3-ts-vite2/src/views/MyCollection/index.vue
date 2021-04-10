<template>
  <div class="my-collection-wrap">
    <nav-bar title="我的收藏" @click-left="clickLeft"></nav-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar/index.vue";
export default defineComponent({
  name: "MyCollection",
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
