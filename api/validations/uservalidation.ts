import joi from 'joi'

export const registerUservalidation = (data: object) => {
    const userSchema = joi.object({
        username: joi.string().alphanum().min(5).max(15).required(),
        password: joi.string().pattern(/^[a-zA-Z0-9]{8,15}$/).required(),
        email: joi.string().email({minDomainSegments: 2 , tlds: { allow: ['com','uk','net']}}).required()
    }) 

    userSchema.validate(data)
}