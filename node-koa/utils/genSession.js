const session = require('koa-session');
const config = require('../config/session.config');
const genSession = (app) => {
    app.keys = config.keys;
    app.use(session(config.sessionConfig, app));
};

module.exports = genSession;
