const jwt = require('jsonwebtoken');
const SECRET_KEY = "TT111402";

const verifyTokenMiddleware = async (req, res, next) => {
    try {
        // Check login 
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw new Error('Token must be provided');
        }

        const fields = authorization.split(' ');
        if (fields.length !== 2) {
            throw new Error('Authorization method is not supported');
        }

        const token = fields[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        req.accountId = decoded.accountId; // Fix variable name

        return next();
    } catch (error) {
        res.status(401).send({
            message: error.message,
            data: null
        });
        return;
    }
};

module.exports = verifyTokenMiddleware;