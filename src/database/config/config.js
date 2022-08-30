require('dotenv/config');

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'wall_dev',
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'wall_test',
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'wall_prod',
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
};

const environment = process.env.APP_ENV || 'development';

module.exports = config[environment];
