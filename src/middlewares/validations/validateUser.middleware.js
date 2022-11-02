const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateBody = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const err = new Error(error.message);
    err.status = 400;
    throw err;
  }

  next();
};

module.exports = {
  validateBody,
};