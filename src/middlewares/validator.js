const Joi = require("joi")

const signUpValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(25).pattern(new RegExp('^[a-zA-Z]{3,25}$')),
        image: Joi.string().required().uri(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8).max(16).pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')),
        country: Joi.string().min(3).max(20)
    }) 
    const validate = schema.validate( req.body, {abortEarly : false} )
    
    if( validate.error ){
        return res.json( {success:false, errors : validate.error.details } )
    }
    
    next()

}
module.exports = signUpValidator
