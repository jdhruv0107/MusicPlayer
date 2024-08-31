import express from "express"
import {signupValidation,loginValidation} from "../middleware/AuthValidation.js"
import  {signup,login}  from "../controllers/AuthController.js";


const router = express.Router();

router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);
    
    // ,(req,res)=>
    // {
    // const {email,password} = req.body
    //     userModel.create({email,password})
    //     .then(users=>res.json(users))
    //     .catch(err=>res.json(err))
    // })
    
    // router.post('/login',(req,res)=>
    // {
    //     const {email,password} = req.body
    //     userModel.findOne({email:email}
    //     )
    //     .then(user=>{
    //         if(user){
    //             if(user.email==="admin@example.com" && password==="1111"){
    //                 user.isAdmin = true
    //                 res.json({message:"successful admin login",isAdmin:user.isAdmin,user:user.email})
    //             }
    //             else if(user.password===password){
    //                 res.json({message:"successful login",isAdmin:user.isAdmin,user:user.email})
    //             }
    //             else{
    //                 res.json("your password is incorrect")
    //             }
    //         }
    //         else{
    //             res.json("no record existed")
    //         }
    //     })
    // })


   export default router