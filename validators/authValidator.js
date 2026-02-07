const Joi = require("joi");

const registerValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  next();
};

const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  next();
};

module.exports = {
  registerValidator,
  loginValidator,
};
