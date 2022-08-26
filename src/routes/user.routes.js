const { Router } = require('express');
const { userController } = require('../controllers');
const { userModel } = require('../database/models');
const joiValidation = require('../middlewares/joiValidation');
const schemas = require('../middlewares/schemas');

const router = Router();

router
  .get('/', async (req, res) => {
    const users = await userModel.findAll();
    res.send(users);
  })
  .post('/register', joiValidation(schemas.register), userController.createUser)
  .post('/login', joiValidation(schemas.login), userController.login);

module.exports = router;
