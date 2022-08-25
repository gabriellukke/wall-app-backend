const { postService } = require('../services');

const createPost = async (req, res) => {
  try {
    const response = await postService.createPost(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

module.exports = {
  createPost,
};
