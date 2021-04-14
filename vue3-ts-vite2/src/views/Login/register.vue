<template>
  <div class="login">
    <span class="to-login" @click="toLogin">去登录</span>
    <van-form @submit="register">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { toRegister } from "../../api/user";
const router = useRouter();

const { ctx } = getCurrentInstance();

const state = reactive({
  username: "",
  password: "",
});

const initError = (err: any) => {
  ctx.$toast({
    type: "fail",
    message: err.message,
  });
  window.localStorage.clear();
  router.push("/register");
};

const toLogin = () => {
  router.push("/login");
};

const register = () => {
  if (!state.username) {
    ctx.$toast({
      type: "text",
      message: "请输入用户名",
    });
    return;
  }

  if (!state.password) {
    ctx.$toast({
      type: "text",
      message: "请输入密码",
    });
    return;
  }
  toRegister({
    username: state.username,
    password: state.password,
    date: new Date(),
  })
    .then(
      (res: any) => {
        ctx.$toast({
          type: "success",
          message: res.message,
        });
        router.push("/login");
      },
      (error: any) => {
        initError(error);
      }
    )
    .catch((error: any) => {
      initError(error);
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
  .to-login {
    position: fixed;
    top: 10px;
    right: 10px;
    color: #19fab6;
    font-size: 16px;
    cursor: pointer;
  }
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
