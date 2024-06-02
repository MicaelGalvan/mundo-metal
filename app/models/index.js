import sequelize from '../config/database.js';
import { Sequelize } from 'sequelize';
import { User } from './userModel.js'; // Directly import the model

const models = {
    User,
};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
