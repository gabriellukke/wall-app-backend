const { userModel } = require('../database/models');

const createUser = async (userInfo) => {
  const { email } = userInfo;

  const dbUser = await userModel.findAll({ where: { email } });

  if (dbUser.length) return { message: 'E-mail already registered!' };

  const {
    dataValues: { id },
  } = await userModel.create(userInfo);

  return id;
};

module.exports = {
  createUser,
};
