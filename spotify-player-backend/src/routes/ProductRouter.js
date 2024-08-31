import express from "express"
import ensureAuthenticated from "../middleware/Auth.js";


const router = express.Router();
router.get("/",ensureAuthenticated,(req,res)=>{
    console.log(req.user) // to get user info at any place in the whole project
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:20000
        }
    ])
})
    
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