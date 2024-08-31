import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signup = async(req,res) =>{
    try {
            const {name,email,password} = req.body
            const user = await userModel.findOne({email});
if(user){
    return res.status(409).json({message:"user is already exist,you can sign in",success:false})

}     

const UserModel = new userModel({name,email,password});
UserModel.password = await bcrypt.hash(password,10)
await UserModel.save()
res.status(201).json({message:"signup successfully",success:true})

    } catch (error)
     {
        res.status(500).json({message:"internal server error",success:false})
    }
}

export const login = async(req,res) =>{
    try {
            const {name,email,password} = req.body
            const user = await userModel.findOne({email});
            
            const errorMsg = "Auth failed wrong email or password"
if(!user){
    return res.status(409).json({message:errorMsg,success:false})

}     

const isPassEqual = await bcrypt.compare(password,user.password)
if(!isPassEqual){
    res.status(403).json({message:errorMsg,success:false})
}
const jwtToken = jwt.sign({email:user.email,_id:user._id},process.env.JWT_SECRET,{expiresIn:"24h"})
res.status(200).json({message:"Login successfully",success:true,jwtToken,email,name:user.name})

    } catch (error)
     {
        res.status(500).json({message:"internal server error in login",success:false})
    }
}
