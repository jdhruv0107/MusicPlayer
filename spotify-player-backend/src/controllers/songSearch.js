import songModel from "../models/songModel.js";


const searchSong = async(req,res)=>{
    try {
        const query = req.query.query;
        const songs = await songModel.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
        res.json(songs);
    } catch (error) {
        res.status(500).send("Server error");
    }
}


export default searchSong