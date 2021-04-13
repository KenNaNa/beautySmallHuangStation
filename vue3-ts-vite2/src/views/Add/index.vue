<template>
  <div class="add-wrap">
    <div class="list">
      <div class="album" v-for="(item, index) in albumList" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="content">
      <van-icon name="plus" @click="show = true" />
    </div>
    <van-overlay :show="show" @click="show = false">
      <van-form @submit="onSubmit" @click.stop>
        <van-field
          v-model="username"
          name="username"
          label="专辑名称"
          placeholder="请输入专辑名称"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <div style="margin: 16px" @click.stop>
          <van-button round block type="primary" native-type="submit">
            添加
          </van-button>
        </div>
      </van-form>
    </van-overlay>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
export default defineComponent({
  name: "Add",
  setup() {
    const { ctx } = getCurrentInstance();
    const state = reactive({
      username: "",
      albumList: [],
      show: false,
    });
    const onSubmit = (e: any): void => {
      if (!state.username) {
        ctx.$toast({
          type: "fail",
          message: "专辑名字不能为空",
        });
        return;
      }
      state.albumList.indexOf(state.username) > -1
        ? ctx.$toast({
            type: "fail",
            message: "专辑名字已存在",
          })
        : state.albumList.push(state.username);
      state.show = false;
      state.username = "";
      console.log("state.albumList", state.albumList);
    };
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
.add-wrap {
  padding: 10px;
  .van-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .list {
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    .album {
      width: 83px;
      height: 83px;
      background-color: #f7f8fa;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}
.content {
  width: 83px;
  height: 83px;
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
