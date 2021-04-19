# beautySmallHuangStation



# 学习资料

[大前端技术为主，读书笔记、随笔、理财为辅，做个终身学习者。](https://github.com/biaochenxuying/blog)

[基于Koa2+MongoDB实现用户注册登录](https://www.jianshu.com/p/f5dae33a1e1e)

[vue + koa2 实现 session token 登陆状态验证](https://segmentfault.com/a/1190000020231569)

[mongoose增加，查询，删除，更新数据](https://blog.csdn.net/weixin_42235173/article/details/90762674)

[websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

[阮一峰 websocket 教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

[模糊查询](https://blog.csdn.net/weixin_40679158/article/details/100212953?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&dist_request_id=1331302.7649.16182772109501375&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)

[MongoDB之数据查询（正则表达式）](https://blog.csdn.net/cuishan5183/article/details/100403446?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=1331302.7649.16182772109501375&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

[本地缓存](https://github.com/2ue/local-storage-js)

[vue+mongoose+node.js项目总结第一篇_图片文件上传](https://www.cnblogs.com/xxm980617/p/11451767.html)

[eletron-vue](https://blog.csdn.net/chenqk_123/article/details/108595966)

[su37josephxia/vue3-study](https://github.com/su37josephxia/vue3-study)

[《微信小程序入门教程》示例库。](https://github.com/ruanyf/wechat-miniprogram-demos)

[Vuex 通俗版教程](https://yeaseonzhang.github.io/2017/03/16/Vuex-%E9%80%9A%E4%BF%97%E7%89%88/)

# 网站简介

一个专注于分享美女小黄图的网站，一个有趣的网站，一个具有后端管理系统，小程序一整套的网站。

- 搜索美女图片功能 
- 确认用户是否是选择男还是女的 
- 图片预览功能 
- 详情 
- 用户点赞，评论，收藏 
- 可以订阅别人的相册 
- 可以创建相册 
- 首页
- 用户中心
- 创建相册

# 公众号

前端入门到进阶图文教程，超详细的Web前端学习笔记。

从零开始学前端，做一名精致优雅的前端工程师。

公众号「人生代码」作者。

![](https://camo.githubusercontent.com/215ea29737f97baab415cea7681726abb0508bad8b3f228e9fd18d0bf8e29405/68747470733a2f2f706963332e7a68696d672e636f6d2f76322d61333737366636646162646638326232386533366138656333386232636533335f622e6a7067)

# 流程

创建用户可以创建相册，可以给这个相册上传图片，可以给这些相册设置 vip 权限，或者免费权限，或者设置部分付费

个人中心，随机生成头像，详情简介，我的相册，我的收藏，

通过 userid 关联专辑表，有专辑列表，点击我的专辑到专辑列表，每一个专辑都可以创建相册，有相片列表，需要相册表。



### 每日 todo

- 完成注册
- 完成登录
- 完成图片首页，以及首页图片点击详情
- 完成搜索功能
- 研究下 websocket
- 研究下 购物车功能


# 技术栈

### 前端

- vue3+ts+vite2

- taro+vue3

- react+vite2+ts

### 后端

- node
- koa2
- mongodb
- mongoose

### 后台管理系统

用的以下这个开源模板

[ant-design-vue3-admin](https://github.com/ziping-li/ant-design-vue3-admin)

[模板预览](https://ziping-li.github.io/ant-design-vue3-admin/#/dashboard/overview)


一个基于 Vite2 + Vue3 + Typescript + tsx + Ant Design Vue 的后台管理系统模板，支持响应式布局，在 PC、平板和手机上均可使用。

- 最新的技术栈
- 统一的技术规范
- 权限方案（路由，菜单，操作）
- 支持多语言
- 数据 mock
- 兼容 PC、平板和手机

已将脚手架和一些通用的部分提取出来，方便单独使用，相关文档地址：

- convue（基于 vite 的类似于 umi.js 的插件）: https://ziping-li.github.io/convue
- convue-lib（通用组件、样式、工具方法）: https://ziping-li.github.io/convue-lib


### 微信授权登录

```html
<view wx:if="{{isHide}}">
    <view wx:if="{{canIUse}}" >
        <view class='header'>
            <image src='/images/wx_login.png'></image>
        </view>

        <view class='content'>
            <view>申请获取以下权限</view>
            <text>获得你的公开信息(昵称，头像等)</text>
        </view>

        <button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
            授权登录
        </button>
    </view>
    <view wx:else>请升级微信版本</view>
</view>

<view wx:else>
    <view>我的首页内容</view>
</view>
```

```js
//获取应用实例
const app = getApp()

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isHide: false
    },

    onLoad: function () {
        var that = this;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                            // 根据自己的需求有其他操作再补充
                            // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                            wx.login({
                                success: res => {
                                    // 获取到用户的 code 之后：res.code
                                    console.log("用户的code:" + res.code);
                                    // 可以传给后台，再经过解析获取用户的 openid
                                    // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                                    // wx.request({
                                    //     // 自行补上自己的 APPID 和 SECRET
                                    //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                                    //     success: res => {
                                    //         // 获取到用户的 openid
                                    //         console.log("用户的openid:" + res.data.openid);
                                    //     }
                                    // });
                                }
                            });
                        }
                    });
                } else {
                    // 用户没有授权
                    // 改变 isHide 的值，显示授权页面
                    that.setData({
                        isHide: true
                    });
                }
            }
        });
    },

    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            var that = this;
            // 获取到用户的信息了，打印到控制台上看下
            console.log("用户的信息如下：");
            console.log(e.detail.userInfo);
            //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
            that.setData({
                isHide: false
            });
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    // 用户没有授权成功，不需要改变 isHide 的值
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”');
                    }
                }
            });
        }
    }
})
```
