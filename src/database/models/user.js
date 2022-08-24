module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, { foreignKey: 'authorId', as: 'Post' });
  };
  return User;
};
