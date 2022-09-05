const { postModel, userModel } = require('../database/models');

const create = async (postInfo) => {
  const { title, content, authorId } = await postModel.create(postInfo);
  return { title, content, authorId };
}

const getAll = async () => {
  const posts = await postModel.findAll({
    include: [{ model: userModel, as: 'user' }],
    order: [['updatedAt', 'DESC']],
  });
  return posts;
}

module.exports = {
  create,
  getAll,
}