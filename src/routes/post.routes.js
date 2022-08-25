const { Router } = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middlewares/auth');

const router = Router();

router
  .get('/', postController.getAll)
  .post('/', validateToken, postController.create);

module.exports = router;
