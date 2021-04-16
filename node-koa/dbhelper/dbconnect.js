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
