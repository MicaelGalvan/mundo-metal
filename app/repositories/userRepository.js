import models from '../models/index.js';

export const findAll = async () => {
    return await models.User.findAll();
};

export const findById = async (id) => {
    return await models.User.findByPk(id);
};

export const findByEmail = async (email) => {
    return await models.User.findOne({ where: { email } });
};

export const createOne = async (user) => {
    return await models.User.create(user);
};