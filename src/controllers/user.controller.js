const { userService } = require('../services');

const createUser = async ({ body }, res) => {
  try {
    const newUser = await userService.createUser(body);

    if (newUser.message) return res.status(409).json(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'unknow error' });
  }
};

module.exports = {
  createUser,
};
