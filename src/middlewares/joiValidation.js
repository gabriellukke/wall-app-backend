const joiValidation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (!error) return next();

  const { details } = error;
  const message = details.map((detail) => detail.message).join();
  
  return res.status(400).json({ error: message });
};

module.exports = joiValidation;
