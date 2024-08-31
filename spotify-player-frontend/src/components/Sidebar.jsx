import React from "react"
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from "react-router-dom"
function Sidebar() {
    const navigate = useNavigate()
    return (

        <div className="w-[350px] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">

                <div onClick={() => { navigate('/') }} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-5' src={assets.home_icon} alt="jijij" />
                    <p className="font-bold">Home</p>
                </div>
                <div onClick={() => navigate('/search')} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-5' src={assets.search_icon} alt="Search" />
                    <p className="font-bold">Search</p>
                </div>

            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className='w-8' src={assets.stack_icon} alt="" />
                        <p className="font-semibold" >Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />

                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-light flex flex-col items-start gap-1 ">
                    <h3>Create Your first playlist</h3>
                    <p className="font-light">Its easy we will help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-light flex flex-col items-start gap-1 ">
                    <h3>lets find some podcasts to follow</h3>
                    <p className="font-light">will keep you updated</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse podcasts</button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar