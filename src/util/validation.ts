import Joi from 'joi';

export default {
  // Create User
  createUser: {
    createUser: Joi.object({
      name: Joi.string().trim().required(),
      email: Joi.string().trim().required(),
      password: Joi.string().trim().required(),
      role: Joi.string().trim(),
    }),
  },
};
