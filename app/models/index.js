import Sequelize from 'sequelize';
import { database, username, password, options } from '../config/database';

const sequelize = new Sequelize(database, username, password, options);

const models = {
    User: require('./userModel')(sequelize, Sequelize.DataTypes),
    Product: require('./productModel')(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
