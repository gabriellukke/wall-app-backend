const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const user = require('./user');
const post = require('./post');

const userModel = user(sequelize, DataTypes);
const postModel = post(sequelize, DataTypes);

module.exports = {
  userModel,
  postModel,
};
