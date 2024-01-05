const bcrypt = require('bcrypt');
const { getToken } = require('../utils/index.js');
const { use } = require('../router/user-router.js');
const { User } = require('../model/uders.js');

const register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password || (password && String(password).length <= 6)) {
            res.status(403).send({
                message: "username và password cần phải cung cấp, password cần ít nhất 6 ký tự",
            });
            return;
        }

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt);

        const currentAccount = await User.findOne({ username });
        if (currentAccount) {
            res.status(403).send({
                message: "Tài khoản đã tồn tại !"
            });
            return;
        }

        const createAccount = await User.create({ username, password: hashedPassword });
        res.status(201).send({
            message: "Đăng ký thành công!",
            data: createAccount
        });
        return;
    } catch (error) {
        res.status(403).send({
            message: error.message,
        });
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            throw new Error('Tên đăng nhập không tồn tại !');
        }

        const matched = bcrypt.compareSync(password, existingUser.password);
        if (!matched) {
            throw new Error('Password không đúng', 400);
        }

        res.status(200).send({
            message: "Đăng nhập thành công !",
            data: getToken({
                id: existingUser.id
            })
        });
    } catch (error) {
        res.status(403).send({
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login
};