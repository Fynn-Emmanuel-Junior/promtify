import { Request,Response } from 'express';
import  bcrypt  from 'bcryptjs';
import UserModel from '../models/UserModel'
import jwt from 'jsonwebtoken'



export const registerController = async (req:Request,res:Response) => {
    const {username,email,password} = req.body

    const checkIfUserExists = await  UserModel.findOne({email: email})
    if(checkIfUserExists) return res.status(400).json('user already exists')

    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(password,salt)

    try {
        const user = await UserModel.create({
            username,
            email,
            password: hashPassword
        })

        res.status(200).json('user created successfully')
    } catch(err: unknown) {
        if(err instanceof Error) {
            res.status(400).json({
                status: false,
                message: err.message
            })
        }
    }
}
