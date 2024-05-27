import dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  "env": process.env.NODE_ENV,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "db_uri": process.env.DB_URI
}

export default CONFIG;