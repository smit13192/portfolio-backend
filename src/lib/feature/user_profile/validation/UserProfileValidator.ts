import Joi from "joi";

export const userProfile = Joi.object({
    name: Joi.string().required(),
    designation: Joi.string().required(),
    experience: Joi.string().required(),
    description: Joi.string().required(),
    focusFramework: Joi.string().required(),
    instagramLink: Joi.string().required(),
    gitLink: Joi.string().required(),
    linkedInLink: Joi.string().required(),
    aboutMe: Joi.string().required(),
    email: Joi.string().required(),
    phoneNo: Joi.string().required(),
});