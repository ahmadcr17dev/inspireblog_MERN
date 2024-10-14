const joi = require('joi')

const registervalidation = (req, res, next) => {
    console.log("Request error", req.body);
    const schema = joi.object({
        username: joi.string().min(7).max(15).required(),
        email: joi.string().email().required(),
        password: joi.string().min(7).max(15).required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        console.log("Joi Validation Error:", error.details);
        return res.status(400).json({ message: "username & password must be more than 7 characters", details: error.details })
    }
    next();
}

const loginvalidation = (req, res, next) => {
    console.log("Request error", req.body);
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(7).max(15).required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "username & password must be more than 7 characters", error })
    }
    next();
}

module.exports = { registervalidation, loginvalidation }