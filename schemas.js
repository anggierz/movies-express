import Joi from 'joi';

export const movieSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string(),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
    rating: Joi.number().min(0).max(10).required()
});
