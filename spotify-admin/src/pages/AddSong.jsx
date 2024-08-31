import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import { url } from "../App.jsx";
import { toast } from "react-toastify";
const AddSong = ()=>{
    const [image,setImage] = useState(false)
    const[song,setSong] = useState(false)

    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [album,setAlbum] = useState('none')
    const [loading,setLoading] = useState(false)
    const [albumData,setAlbumData] = useState([])
    const onSubmitHandler = async (e) =>
        {
        setLoading(true)
        e.preventDefault();
            try {
                const formData = new FormData();
                formData.append('name',name)
                formData.append('desc',desc)
                formData.append('image',image)
                formData.append('audio',song)
                formData.append('album',album)

                const response = await axios.post(`${url}/api/song/add`,formData);

                console.log(response)
                if(response.data.success){
                    toast.success("Song added")
                    setName("")
                    setDesc("")
                    setSong(false)
                    setImage(false)
                    setAlbum("none")
                }
                else{
                    toast.error("Something went wrong")
                }
            } catch (error) {
                    toast.error("error occured")
            }
            setLoading(false)
    }

const loadAlbumsData = async() =>{
    try {
        const response = await axios.get(`${url}/api/album/list`)
        if(response.data.success){
            setAlbumData(response.data.albums)

        }
        else{
            toast.error("unable to load albums data")

        }
    } catch (error) {
        toast.error("error occured in addsong")
    }
}

useEffect(()=>{
    loadAlbumsData()
},[])

    return loading ? (<div className="grid place-items-center min-h-[80vh]">
        <div className="w-16 h-16 place-self center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">

        </div>
    </div>) : 
    (
        <>
        <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-start text-gray-600 gap-8">
        <div className="flex gap-8 ">
            <div className="flex flex-col gap-4"><p>
                Upload Song
                </p>
                <input onChange={(e)=>{setSong(e.target.files[0])}} type="file" accept="audio/*" id="song" hidden/>
                <label htmlFor="song">
                    <img src={song ? assets.upload_added : assets.upload_song} alt="" className="w-24 cursor-pointer"/>
                </label>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Upload Image</p>
                    <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id="image" hidden accept="image/*"/>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="cursor-pointer w-24" alt="" />
                    </label>
                </div>
        </div>
                <div className="flex flex-col gap-2.5">
                <p>Song Name</p>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" id="" className="bg-transparent outline-green-600 border-green border-2 w-[max(45vw,250px)] p-2" value={name} placeholder="Add Song Here" required/>
                </div>
                <div className="flex flex-col gap-2.5">
                <p>Song Description</p>
                <input onChange={(e)=>{setDesc(e.target.value)}} value={desc} type="text" id="" className="bg-transparent outline-green-600 border-green border-2 w-[max(45vw,250px)] p-2" placeholder="Add Song Here" required/>
                </div>

                <div className="flex flex-col gap-2.5"> 
                    <p>Album</p>
                    <select onChange={(e)=>{setAlbum(e.target.value)}} defaultValue={album} name="" id="" className="bg-transparent outline-green-400 border-2 border-gray-400 p-2">
                        <option value="none">None</option>
                        {albumData.map((item,index)=>(
                            <option key={index} value={item.name}>{item.name}</option>
                        ))
                        }
                    </select>
                </div>
                <button type="submit" className="text-base bg-black text-white px-14 cursor-pointer py-2.5 rounded">
                    Add
                </button>
        </form>
        </>
    )
}
export default AddSong