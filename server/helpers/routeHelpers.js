const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if(result.error) {
                return res.status(400).send({error: result.error});
            }
            next();
        };
    },
    schemas: {
        newUserSchema: Joi.object().keys({
            first: Joi.string().required(),
            last: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(3).required()
        }),
        signInSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(3).required()
        })
    }
}