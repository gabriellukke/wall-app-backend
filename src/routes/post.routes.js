const { Router } = require('express');
const { postModel } = require('../database/models');
// const { postController } = require('../controllers');

const router = Router();

router
  .post('/', async (req, res) => {
    const { title, content, authorId } = req.body;
    const response = await postModel.create({ title, content, authorId });
    res.status(200).json(response);
  });

module.exports = router;
