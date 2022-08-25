const { postService } = require('../services');

const create = async (req, res) => {
  try {
    const response = await postService.createPost(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await postService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}`});
  }
}

module.exports = {
  create,
  getAll,
};
