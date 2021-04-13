<template>
  <div class="home">
    <search-input
      @clear="clear"
      @change="change"
      v-model="state.searchValue"
    ></search-input>
    <banner
      :bannerData="state.bannerData"
      v-if="state.bannerData.length"
    ></banner>
    <van-empty
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJs-dP9xYTISMvhxJ4KzqobVP2rO_KbHC5ZWJoySgLjbY5-VHsne_5UFdW0y3fzwoNOD8&usqp=CAU"
      description="暂无数据"
      v-else
    />
    <van-loading color="#1989fa" v-if="state.loading" />
  </div>
</template>
<script lang="ts" setup="props">
import {
  reactive,
  onMounted,
  getCurrentInstance,
  defineComponent,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getBannerList } from "../../api/banner";
import { getBannerBySearch } from "../../api/search";

import SearchInput from "@/components/SearchInput/index.vue";

defineComponent({
  components: {
    "search-input": SearchInput,
  },
});

const router = useRouter();
const store = useStore();

// 获取上下文对象
const { ctx } = getCurrentInstance();

// 定义响应式数据
const state = reactive({
  color: "#ccc",
  bannerData: [],
  loading: false,
  searchValue: "",
});

// 搜索查询
const change = (e: any) => {
  getBannerBySearch({ keyword: e.target.value }).then((res: any) => {
    console.log("change===>", res);
    state.bannerData = res.banners;
  });
};

// 清楚搜索
const clear = (e: any) => {
  getBannerBySearch({ keyword: state.searchValue }).then((res: any) => {
    console.log("clear===>", res);
    state.bannerData = res.banners;
  });
};

const initFN = () => {
  ctx.$toast({
    type: "fail",
    message: "请求失败",
  });
  state.loading = false;
};

// DOM 加载完成后更新数据
onMounted(() => {
  state.loading = true;
  getBannerList()
    .then(
      (res: any) => {
        state.loading = false;
        state.bannerData = res.banners;
        ctx.$toast({
          type: "success",
          message: "请求成功",
        });
        console.log(res);
      },
      (error) => {
        initFN();
      }
    )
    .catch((error) => {
      initFN();
    });
});
</script>
<style lang="scss" scoped>
:deep(.van-empty) {
  height: 100%;
}
.home {
  height: 100%;
}
.text {
  color: v-bind("state.color");
  font-size: 20px;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: #2c323c;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
