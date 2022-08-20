const bcrypt = require('bcryptjs');
const { userModel } = require('../database/models');

const createUser = async (userInfo) => {
  const { email, password } = userInfo;

  const dbUser = await userModel.findOne({ where: { email } });
  if (dbUser) return { message: 'E-mail already registered!' };

  const SALT_ROUNDS = 10;
  const GENERATED_SALT = bcrypt.genSaltSync(SALT_ROUNDS);

  const {
    dataValues: { id },
  } = await userModel.create({
    ...userInfo,
    password: bcrypt.hashSync(password, GENERATED_SALT),
  });
  return id;
};

module.exports = {
  createUser,
};
