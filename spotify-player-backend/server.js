import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoutes.js'
import connectDb from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import albumRouter from './src/routes/albumRoutes.js'
import Authrouter from "./src/routes/Authrouter.js"
import ProductRouter from "./src/routes/ProductRouter.js"
import userModel from './src/models/userModel.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
// app config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()
// middlewares
app.use(express.json())
app.use(cors()) // to allow frontend to connect to the backend as both are running on different port
app.use(bodyParser.json())




// initializing routes
app.use('/api/song',songRouter)
app.use('/api/album',albumRouter)
app.use("/auth",Authrouter)
app.use("/products",ProductRouter)



app.get('/',(req,res)=>{res.send('api working very successfully')})
app.listen(port,()=>{console.log(`server started on ${port}`)})