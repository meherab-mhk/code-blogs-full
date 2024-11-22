const joi = require('joi');

const blogValidation = (req, res, next) => {
    const schema = joi.object({
        title: joi.string().min(3).max(100).required(),
        content: joi.string().min(5).max(2000).required(),
        author: joi.string().required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "Bad request", error})
    }
    next();
}

module.exports = {
    blogValidation
}