const { Router } = require('express');
const { userController } = require('../controllers');
const { userModel } = require('../database/models');

const router = Router();

router
  .get('/', async (req, res) => {
    const users = await userModel.findAll();
    res.send(users);
  })
  .post('/register', userController.createUser)
  .post('/login', userController.login);

module.exports = router;
