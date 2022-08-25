const { postModel } = require('../database/models');

const createPost = async (postInfo) => {
  const { title, content, authorId } = await postModel.create(postInfo);
  return { title, content, authorId };
}

module.exports = {
  createPost,
}