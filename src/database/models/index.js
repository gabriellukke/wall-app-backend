const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const user = require('./user');
const post = require('./post');

const userModel = user(sequelize, DataTypes);
const postModel = post(sequelize, DataTypes);

userModel.hasMany(postModel, { foreignKey: 'authorId', as: 'post' });
postModel.belongsTo(userModel, { foreignKey: 'authorId', as: 'user' });

module.exports = {
  userModel,
  postModel,
};
