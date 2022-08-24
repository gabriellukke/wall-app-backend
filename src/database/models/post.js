module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    authorId: {
      type: DataTypes.STRING,
    }
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'authorId', as: 'User' });
  };
  return Post;
};
