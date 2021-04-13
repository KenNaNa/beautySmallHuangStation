# beautySmallHuangStation

看这里，胸太大了

![](https://lh3.googleusercontent.com/proxy/g3UarglUxpOovTXAA6eUfJxPYG2hQ8Kw4nUp16mkuQ3mpINipYv-2PXT1HWRvoVphhMfeo1R0VqJz-oWZnhdsQn9royFtPUgaums)

# 学习资料

[大前端技术为主，读书笔记、随笔、理财为辅，做个终身学习者。](https://github.com/biaochenxuying/blog)

[基于Koa2+MongoDB实现用户注册登录](https://www.jianshu.com/p/f5dae33a1e1e)

[vue + koa2 实现 session | token 登陆状态验证](https://segmentfault.com/a/1190000020231569)

[mongoose增加，查询，删除，更新数据](https://blog.csdn.net/weixin_42235173/article/details/90762674)

[websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

[阮一峰 websocket 教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

[模糊查询](https://blog.csdn.net/weixin_40679158/article/details/100212953?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&dist_request_id=1331302.7649.16182772109501375&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)

[MongoDB之数据查询（正则表达式）](https://blog.csdn.net/cuishan5183/article/details/100403446?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=1331302.7649.16182772109501375&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

[本地缓存](https://github.com/2ue/local-storage-js)

[vue+mongoose+node.js项目总结第一篇_图片文件上传](https://www.cnblogs.com/xxm980617/p/11451767.html)

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

### 后端

- node
- koa2
- mongodb
- mongoose

### 后端项目目录

- bin
  - www
- config
  - session.config.js



```js
const sessionConfig = {
    key: 'koa:sess',
    /** (string) cookie key (default is koa:sess) cookie 的Name */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    /** cookie 的过期时间 */
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

const keys = ["login secret"];

module.exports = {
    keys,
    sessionConfig
};
```
  - token.coonfig.js

```js
const tokenConfig = {
    privateKey: 'login token'
};

module.exports = tokenConfig;
```


- controller
- dbhelper
  - dbconfig.js



```js
const dbconfig = {
    dbName: 'beautySmallHuangStation',
    dbHost: 'mongodb://localhost:27017/',
    useName: '',
    passWrd: ''
};

module.exports = dbconfig;
```

  - dbconnect.js


```js
const mongoose = require('mongoose');
const app = require('../app');
const dbconfig = require('./dbconfig');
// 链接数据库
const dbName = dbconfig.dbName;
const dbHost = dbconfig.dbHost;

const dbconnect = (app) => {
    mongoose.connect(`${dbHost}${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("数据库链接成功");
    }).catch(() => {
        console.log('数据库连接失败');
    });
};

module.exports = dbconnect;
```

- model
  - banners.js


```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bannerSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    images: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    imgs: {
        type: Array,
        default: Array,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Banners', bannerSchema);
```
  - user.js

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date
    }
});

module.exports = mongoose.model('User', userSchema);
```


- routes
  - banners.js


```js
const router = require('koa-router')();
const Banners = require('../model/banners');

router.get('/banners', async ctx => {
    const findBanners = await Banners.find({});
    ctx.status = 200;
    ctx.body = {
        status: 200,
        banners: findBanners
    };
});

router.post('/detail', async ctx => {
    const {
        id
    } = ctx.request.body;
    const findOne = await Banners.find({
        id
    });

    ctx.status = 200;
    ctx.body = {
        status: 200,
        banners: findOne
    };
})


module.exports = router;
```

  - index.js


```js
const router = require('koa-router')();
const user = require('./user');
const banners = require('./banners');
const searchs = require('./searchs');
router.prefix('/api');


router.use('/user', user.routes(), user.allowedMethods());
router.use('/banner', banners.routes(), banners.allowedMethods());
router.use('/searchs', searchs.routes(), searchs.allowedMethods());
module.exports = router;
```
  - search.js


```js
const router = require('koa-router')();
const Banners = require('../model/banners');

router.post('/search', async ctx => {
    const {
        keyword
    } = ctx.request.body; // 拿到关键词

    const reg = new RegExp(keyword, 'i'); // 不区分大小写
    const title = {
        $regex: reg
    }
    const findBanners = await Banners.find(keyword ? {
        title
    } : {});
    ctx.status = 200;
    ctx.body = {
        status: 200,
        banners: findBanners
    };
});

module.exports = router;
```

  - user.js



```js
const router = require('koa-router')();
const User = require('../model/user');
const genToken = require('../utils/getToken');
const verifyToken = require('../utils/verifyToken');
/**
 * @route POST api/users/register
 * @desc 注册接口地址
 * @access 接口是公开的 即不需要token
 */
router.post('/register', async ctx => {
  console.log(ctx.request.body);
  const findResult = await User.find({
    username: ctx.request.body.username
  });
  console.log(findResult);
  if (findResult.length > 0) {
    ctx.status = 200;
    ctx.body = {
      status: 200,
      message: "用户名已经被注册过了"
    };
  } else {
    const {
      username,
      password,
      date
    } = ctx.request.body
    const newUser = new User({
      username,
      password,
      date
    });
    await newUser.save().then(user => {
      let obj = {
        username: user.username,
        date: user.date,
        userid: user._id
      }
      ctx.status = 200;
      ctx.body = {
        status: 200,
        message: '注册成功',
        userInfo: obj
      };
    }).catch(() => {
      ctx.body = {
        status: 200,
        message: '注册失败'
      };
    });
  }
})


/**
 * @route POST api/users/login
 * @desc 登录接口地址 返回token
 * @access 接口是公开的 即不需要token
 */
router.post("/login", async ctx => {
  const {
    username,
    password
  } = ctx.request.body
  const findResult = await User.find({
    username
  });

  console.log(findResult);
  // 判断是否存在该用户
  if (findResult.length == 0) {
    // status
    ctx.status = 200;
    ctx.body = {
      status: 404,
      message: '用户不存在'
    }
  } else {
    // 验证密码是否正确
    const userInfo = {
      username,
      password
    };
    const token = genToken(userInfo);
    var res = await User.find({
      password
    });
    if (res.length > 0) {
      let obj = {
        username: findResult[0].username,
        date: findResult[0].date,
        userid: findResult[0]._id
      }
      // 返回用户信息
      ctx.status = 200;
      ctx.body = {
        status: 200,
        message: "登录成功",
        userInfo: obj,
        token
      };
    } else {
      ctx.status = 200;
      ctx.body = {
        status: 400,
        message: "密码错误"
      };
    }
  }
});

router.get('/isLogin', async ctx => {
  try {
    const token = ctx.get('Authorization');
    let userInfo = {};
    if (token === '') {
      ctx.status = 200;
      ctx.body = {
        status: 0,
        message: '未登录'
      };
    } else {
      try {
        userInfo = verifyToken(token);
        ctx.body = {
          status: 1,
          message: '已登录',
          userInfo,
          isLogin: true
        };
      } catch (error) {
        ctx.body = {
          status: 0,
          message: '未登录',
          userInfo,
          isLogin: false
        }
      }
    }
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
```

- utils
  - genSession.js



```js
const session = require('koa-session');
const config = require('../config/session.config');
const genSession = (app) => {
    app.keys = config.keys;
    app.use(session(config.sessionConfig, app));
};

module.exports = genSession;
```

  - getToken.js



```js
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/token.config');

const genToken = (userInfo) => {
    return jwt.sign(userInfo, tokenConfig.privateKey, {
        expiresIn: '7d'
    });
};

module.exports = genToken;
```
  - verifyToken.js

```js
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/token.config');

const verifyToken = (token) => {
    return jwt.verify(token.split(' ')[1], tokenConfig.privateKey);
}

module.exports = verifyToken;
```


- app.js



```js
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const router = require('./routes/index')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(router.routes()).use(router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
```

- package.json



```json
{
  "name": "koa-mongodb-end",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node bin/www",
    "dev": "./node_modules/.bin/nodemon bin/www",
    "prd": "pm2 start bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "debug": "^4.1.1",
    "jsonwebtoken": "^8.5.1",
    "koa": "^2.7.0",
    "koa-bodyparser": "^4.2.1",
    "koa-convert": "^1.2.0",
    "koa-json": "^2.0.2",
    "koa-logger": "^3.2.0",
    "koa-onerror": "^4.1.0",
    "koa-router": "^7.4.0",
    "koa-session": "^6.2.0",
    "koa-static": "^5.0.0",
    "koa-views": "^6.2.0",
    "mongoose": "^5.12.3",
    "pug": "^2.0.3"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
}

```







