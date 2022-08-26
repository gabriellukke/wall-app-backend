const { Router } = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middlewares/auth');
const joiValidation = require('../middlewares/joiValidation');
const schemas = require('../middlewares/schemas');

const router = Router();

router
  .get('/', postController.getAll)
  .post('/', joiValidation(schemas.createPost), validateToken, postController.create);

module.exports = router;
