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
