const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/token.config');

const verifyToken = (token) => {
    return jwt.verify(token.split(' ')[1], tokenConfig.privateKey);
}

module.exports = verifyToken;
