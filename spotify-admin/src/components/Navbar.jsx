import React from "react";


const Navbar = ()=> {

const handleLogout=()=>{
localStorage.removeItem('token')
localStorage.removeItem("loggedInUser")
setTimeout(()=>{
    window.location.href = "http://localhost:5173/login"; // for user route purpose

},1000)
}
    return(
    <>

    
    <div className="navbar w-full border-b-2 border-gray-800 px-5 py-4 text-lg sm:px-12">
        Admin panel
    </div>
    <button className="w-[100px] bg-slate-400 text-white m-2" onClick={handleLogout}>
        Logout
    </button>
    </>
    )

}
export default Navbar