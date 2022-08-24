const { Router } = require('express');
const { userController } = require('../controllers');

const router = Router();

router
  .post('/register', userController.createUser)
  .post('/login', userController.login);

module.exports = router;
