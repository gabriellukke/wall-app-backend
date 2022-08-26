const { userService } = require('../services');

const createUser = async ({ body }, res) => {
  try {
    const { status, message } = await userService.createUser(body);

    return res.status(status).json({ message });
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

const login = async ({ body }, res) => {
  try {
    const user = await userService.login(body);

    if (user.message) return res.status(401).json(user);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `unknow error: ${error}` });
  }
};

module.exports = {
  createUser,
  login,
};
