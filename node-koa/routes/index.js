const router = require('koa-router')();
const user = require('./user');
const banners = require('./banners');
const searchs = require('./searchs');
router.prefix('/api');


router.use('/user', user.routes(), user.allowedMethods());
router.use('/banner', banners.routes(), banners.allowedMethods());
router.use('/searchs', searchs.routes(), searchs.allowedMethods());
module.exports = router;
