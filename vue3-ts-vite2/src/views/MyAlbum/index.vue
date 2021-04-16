<template>
  <div class="my-album-wrap">
    <nav-bar title="我的专辑" @click-left="clickLeft"></nav-bar>
    <div class="my-album" v-if="albumList.length"></div>
    <div class="empty" v-else>
      <van-empty
        class="custom-image"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJs-dP9xYTISMvhxJ4KzqobVP2rO_KbHC5ZWJoySgLjbY5-VHsne_5UFdW0y3fzwoNOD8&usqp=CAU"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar/index.vue";
export default defineComponent({
  name: "MyAlbum",
  components: {
    "nav-bar": NavBar,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      albumList: [],
    });
    const clickLeft = () => {
      router.go(-1);
    };

    return {
      clickLeft,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.my-album {
  margin-top: 50px;
}
.empty {
  margin-top: 50px;
}
</style>
