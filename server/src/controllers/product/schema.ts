import Joi from 'joi'

export const createProductSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().optional().allow('').allow(null),
  category: Joi.string()
    .required(),
  price: Joi.number().min(0).required(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().min(1).optional(),
  description: Joi.string().optional().allow('').allow(null),
  category: Joi.string()
    .required(),
  price: Joi.number().min(0).optional(),
});
