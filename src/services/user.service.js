const { userModel } = require('../database/models');

const createUser = async (userInfo) => {
  const { email } = userInfo;

  const dbUser = await userModel.findOne({ where: { email } });
  if (dbUser) return { message: 'E-mail already registered!' };

  const {
    dataValues: { id },
  } = await userModel.create(userInfo);
  return id;
};

module.exports = {
  createUser,
};
