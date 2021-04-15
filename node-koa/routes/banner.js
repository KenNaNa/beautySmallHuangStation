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
