import Joi from "joi";

export const createSkill = Joi.object({
    name: Joi.string().required(),
});