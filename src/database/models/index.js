const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const user = require('./user');

const userModel = user(sequelize, DataTypes);

module.exports = {
  userModel,
};