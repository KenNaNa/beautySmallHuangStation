喜欢自己一步一步搭建自己后管模板，可以参考官网，或者快速开始

[koa2](https://koa.bootcss.com/)

[快速开始](https://chenshenhai.github.io/koa2-note/note/start/quick.html)

我们就不用一步一步创建项目，我们就直接使用 koa2 的脚手架直接创建项目，首先需要全局安装 koa2 脚手架

```js
npm install -g koa-generator
```

创建项目

```js
koa2 node-koa
```

目录大致如下：

```js
   create : node-koa
   create : node-koa/package.json //  项目依赖
   create : node-koa/app.js // 项目入口文件
   create : node-koa/routes // 项目路由
   create : node-koa/routes/index.js // index 路由
   create : node-koa/routes/users.js // 用户路由
   create : node-koa/views // 前端模板
   create : node-koa/views/index.pug 
   create : node-koa/views/layout.pug
   create : node-koa/views/error.pug
   create : node-koa/public // 公用文件
   create : node-koa/public/stylesheets // 样式脚本
   create : node-koa/public/stylesheets/style.css
   create : node-koa/public/javascripts
   create : node-koa/bin
   create : node-koa/bin/www // 启动服务的文件

   install dependencies:
     > cd node-koa && npm install

   run the app:
     > SET DEBUG=koa* & npm start node-koa

   create : node-koa/public/images
```

ok 我们接下来就是在这个基础模板改造

因为我们是前后端分离的，所以不需要 public, views 目录，所以将他们两个删除吧，我们先不去说那些文件到底有什么作用，先来思考几个问题

这个项目我们需要有

- 登录注册接口，有接口，就需要创建数据库，创建用户表，所以我们需要有 model 目录, 用来存放抽象数据表字段的 js 文件
- 处理登录接口，我们需要生成一些 token 配置信息，所以需要有一个 config 目录，session, token 
- 有了数据库，我们需要对他抽取出来，搞一个配置文件，那么就需要 dbhelper 目录，用来配置数据库名字，密码，端口号，以及数据库连接
- 接下来就是路由 routes 目录


所以我们需要先配置数据库

在 dbhelper 目录下创建 dbconfig.js，用于配置数据库名称，数据库主机，登录用户，登录密码

```js
const dbconfig = {
    dbName: 'beautySmallHuangStation',
    dbHost: 'mongodb://localhost:27017/',
    useName: '',
    passWrd: ''
};

module.exports = dbconfig;
```

同时创建 dbconnect.js 用于监听数据库连接成功，这里我们需要使用 mongoose 数据库来连接，所以需要事先安装

```js
npm insrtall mongoose --save
```

接下来代码逻辑如下：

```js
const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');
// 链接数据库
const dbName = dbconfig.dbName;
const dbHost = dbconfig.dbHost;

const dbconnect = () => {
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

然后我们先来安装 jsonwebtoken 先配置下 session

在 config 目录下创建 session.config.js

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

我们这里使用使用 token 的方式来验证登录接口，所以需要创建 token.config.js

```js
const tokenConfig = {
    privateKey: 'login token'
};

module.exports = tokenConfig;
```

接下来就是创建数据了

我们需要登录接口，所以需要创建 model/user.js

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { // 对应表里面的 username 字段
        type: String,
        require: true
    },
    password: { // 对应表的密码字段
        type: String,
        require: true
    },
    date: { // 对应表里面的时间字段
        type: Date,
        default: Date
    }
});

module.exports = mongoose.model('User', userSchema); // 与 user 表取得对应
```


有了数据表之后，我们就需要路由，让前端可以访问到我们的路由，所以需要创建 routes/user.js

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





