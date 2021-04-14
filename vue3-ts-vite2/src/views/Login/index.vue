<template>
  <div class="login">
    <span class="to-login" @click="toRegister">去注册</span>
    <van-form @submit="login">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { toLogin } from "../../api/user";
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
};

const toRegister = () => {
  router.push("/register");
};

const tipFn = (res: any, type: string, cb: Function): void => {
  ctx.$toast({
    type,
    message: res.message,
  });
  cb();
};

const login = () => {
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
  toLogin({ username: state.username, password: state.password })
    .then(
      (res: any) => {
        console.log("res===>", res);
        if (res.status === 200) {
          window.localStorage.setItem("accessToken", res.token);
          window.localStorage.setItem("userInfo", JSON.stringify(res.userInfo));
          tipFn(res, "success", () => {
            router.push("/select");
          });
        } else if (res.status === 404) {
          window.localStorage.clear();
          tipFn(res, "fail", () => {
            router.push("/register");
          });
        } else if (res.status === 400) {
          window.localStorage.clear();
          tipFn(res, "fail", () => {
            router.push("/login");
          });
        }
      },
      (error) => {
        initError(error);
      }
    )
    .catch((error) => {
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
