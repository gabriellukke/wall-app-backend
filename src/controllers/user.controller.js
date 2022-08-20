const { userService } = require('../services');

const createUser = async ({ body }, res) => {
  try {
    const newUser = await userService.createUser(body);

    if (newUser.message) return res.status(409).json(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

const login = ({ body }, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

module.exports = {
  createUser,
  login,
};
