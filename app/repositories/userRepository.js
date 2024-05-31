const { User } = require('../models/');

const findAll = async () => {
    return await User.findAll();
};

const findById = async (id) => {
    return await User.findByPk(id);
};

const create = async (user) => {
    return await User.create(user);
};

module.exports.userRepository = {
    findAll,
    findById,
    create,
};
