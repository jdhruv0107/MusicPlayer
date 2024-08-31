import React, { useEffect, useState } from "react"
import { assets } from "../assets/frontend-assets/assets"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
const name = localStorage.getItem('loggedInUser')
const handleLogout=()=>{
localStorage.removeItem('token')
localStorage.removeItem("loggedInUser")
setTimeout(()=>{
  navigate('/login')
},1000)
}
    return (
      <>
        <div className='w-full flex justify-between items-center font-semibold '>
        <div className="flex items-center gap-2">
        
        <img onClick={()=>{navigate(-1)}} className='w-8 bg-black rounded-2xl cursor-pointer p-2' src={assets.arrow_left} alt="" />
        <img onClick={()=>{navigate(1)}} className='w-8 bg-black rounded-2xl cursor-pointer p-2' src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
        <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">Install App</p>
        <button onClick={handleLogout} className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-white">
          {
            name ? "logout":"login/signup"
          }
        </button>
        <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
                D
        </p>
        </div>
        </div>
        <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
        </div>
      </>
    )
  }
  
  export default Navbar