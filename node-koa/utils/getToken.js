const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/token.config');

const genToken = (userInfo) => {
    return jwt.sign(userInfo, tokenConfig.privateKey, {
        expiresIn: '7d'
    });
};

module.exports = genToken;
