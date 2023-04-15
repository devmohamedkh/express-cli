import Joi from '@hapi/joi';

export const newUserValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required()
  });

  return schema.validate(data);
};

