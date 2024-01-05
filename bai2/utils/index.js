const jwt = require('jsonwebtoken');
const SECRET_KEY = "TT111402";

const getToken = (data) => {
    const token = jwt.sign(data, SECRET_KEY, {
        expiresIn: 1000 * 60 * 3
    });
    console.log(token);
    return token;
};

module.exports = {
    getToken
};