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
