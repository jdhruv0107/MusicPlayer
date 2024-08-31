import { addSong,listSong,removeSong } from "../controllers/songControllers.js";
import express from 'express'
import upload from "../middleware/multer.js";
import searchSong from "../controllers/songSearch.js";

const songRouter = express.Router()
songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong);
songRouter.get('/list',listSong)
songRouter.post('/remove',removeSong)
songRouter.get('/',searchSong)


export default songRouter