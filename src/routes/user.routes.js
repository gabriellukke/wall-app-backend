const { Router } = require('express');
const { userController } = require('../controllers');

const router = Router();

router
  .get('/', (req, res) => res.send('Hi'))
  .post('/register', userController.createUser)
  .post('/login', () => console.log('test'));

module.exports = router;
