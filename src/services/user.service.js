const bcrypt = require('bcryptjs');
const { userModel } = require('../database/models');
const createToken = require('../middlewares/auth');

const createUser = async (userInfo) => {
  const { email, password } = userInfo;

  const dbUser = await userModel.findOne({ where: { email } });
  if (dbUser) return { status: 409, message: 'E-mail already registered!' };

  const SALT_ROUNDS = 10;
  const GENERATED_SALT = bcrypt.genSaltSync(SALT_ROUNDS);

  await userModel.create({
    ...userInfo,
    password: bcrypt.hashSync(password, GENERATED_SALT),
  });

  return { status: 200, message: 'User registered successfully' };
};

const login = async ({ email, password }) => {
  const dbUser = await userModel.findOne({ where: { email } });

  if (!dbUser)
    return {
      message: 'Unauthorized, incorrect or unregistered email',
    };

  const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
  if (!isPasswordCorrect)
    return {
      message: 'Unauthorized, incorrect password',
    };

  const jwtPayload = {
    userId: dbUser.id,
    firstName: dbUser.firstName,
    lastName: dbUser.lastName,
    email: dbUser.email,
  };
  const token = createToken(jwtPayload);

  return {
    token,
    ...jwtPayload,
  };
};

module.exports = {
  createUser,
  login,
};
