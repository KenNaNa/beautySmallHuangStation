<template>
  <view class="login">
    <view class="passw-name-box">
      <view class="name">
        <AtInput
          title="昵称"
          name="userName"
          v-model:value="state.userName"
          type="text"
          placeholder="请输入用户名"
        />
      </view>
      <view class="name">
        <AtInput
          name="passWord"
          title="密码"
          v-model:value="state.passWord"
          type="password"
          placeholder="请输入密码"
        />
      </view>
      <view class="btn">
        <AtButton type="primary" formType="submit" @click="login"
          >提交</AtButton
        >
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { AtInput, AtButton } from "taro-ui-vue3";
import { toLogin } from "../../api/index";
import "./index.scss";

export default {
  name: "Login",
  components: {
    AtInput,
    AtButton,
  },
  setup() {
    const router = useRouter();
    console.log("router", router);

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
      ctx.$taro.navigateTo({
        url: "pages/login/index",
      });
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
            ctx.$taro.navigateTo({
              url: "/pages/select/index",
            });
          },
          (error) => {
            initError();
          }
        )
        .catch((error) => {
          initError();
        });
    };

    return {
      login,
      state,
    };
  },
};
</script>
