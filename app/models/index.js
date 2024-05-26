'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '../../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Function to load models from a directory
const loadModels = (dir) => {
  fs.readdirSync(dir)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
};

// Load models from each entity's model directory
const modelDirs = [
  path.join(__dirname, '../users/models'),
  path.join(__dirname, '../products/models'),
  // Add other model directories here
];

modelDirs.forEach(loadModels);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
