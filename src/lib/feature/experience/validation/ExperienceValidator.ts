import Joi from "joi";

export const createExperience = Joi.object({
    title: Joi.string().required(),
    address: Joi.string().required(),
    description: Joi.string().required(),
    isWork: Joi.boolean().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().allow(null),
    isNow: Joi.boolean().allow(null),
});