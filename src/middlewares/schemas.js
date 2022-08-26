const Joi = require('joi');

const schemas = {
  register: Joi.object().keys({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(8).max(30).required(),
  }),
  login: Joi.object().keys({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(8).max(30).required(),
  }),
  createPost: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    authorId: Joi.string().required(),
  }),
};

module.exports = schemas;
