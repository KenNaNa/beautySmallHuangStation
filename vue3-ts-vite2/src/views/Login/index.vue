<template>
  <div class="login">
    <van-form @submit="login">
      <van-field
        v-model="state.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.passWord"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { toLogin } from "../../api/index";
const router = useRouter();

const { ctx } = getCurrentInstance();

const state = reactive({
  userName: "",
  passWord: "",
});

const initError = () => {
  ctx.$toast({
    type: "fail",
    message: "登录失败",
  });
  window.localStorage.clear();
  router.push("/login");
};

const login = async () => {
  if (!state.userName) {
    ctx.$toast({
      type: "text",
      message: "请输入用户名",
    });
    return;
  }

  if (!state.passWord) {
    ctx.$toast({
      type: "text",
      message: "请输入密码",
    });
    return;
  }
  toLogin({ userName: state.userName, passWord: state.passWord })
    .then(
      (res) => {
        ctx.$toast({
          type: "success",
          message: "登录成功",
        });

        // 设置 token
        window.localStorage.setItem("accessToken", res.data.token);
        console.log("res===>", res);
        router.push("/select");
      },
      (error) => {
        initError();
      }
    )
    .catch((error) => {
      initError();
    });
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url("./login/bgimg.jpg") no-repeat;
  background-size: 100% 100%;
  background-position: 100% 100%;
  :deep(.van-form) {
    width: 80%;
  }
  .passw-name-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .btn {
      :deep(.van-button) {
        width: 150px;
      }
    }
    .name {
      display: flex;
      justify-content: center;
      padding: 5px 10px;
      input {
        width: 250px;
        height: 32px;
        outline: none;
        border: none;
        font-size: 16px;
        margin-left: 10px;
      }
      .name-img {
        display: block;
        width: 32px;
        height: 32px;
        background: url("./login/sno.png") no-repeat;
        background-size: 100% 100%;
      }
      .passw-img {
        display: block;
        width: 32px;
        height: 32px;
        background: url("./login/pasw.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
