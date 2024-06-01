import { Sequelize } from 'sequelize';
import dotenv from 'dotenv/config';

const sequelize = new Sequelize(dotenv.env.DB_NAME, dotenv.env.DB_USER, dotenv.env.DB_PASSWORD, {
    host: dotenv.env.DB_HOST,
    dialect: 'mysql', // You can change this to 'postgres', 'sqlite', etc.
    logging: false,
});

export default sequelize;
