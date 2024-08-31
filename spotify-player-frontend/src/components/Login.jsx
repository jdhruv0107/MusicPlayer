import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from "../utils";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for default styles

const Login = () => {
const navigate = useNavigate()
  // const [signupInfo,setSignupInfo] = useState({
  //   name:"",
  //   email:"",
  //   password:""
  // })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//  const handleChange = (e)=>{
//   const {name,value} = e.target
//   console.log(name,value)
//   const copysignupInfo = {...signupInfo}
//   copysignupInfo[name] = value
//   setSignupInfo(copysignupInfo)

//  }

 const handleLogin = async(e)=>{
  e.preventDefault()
  if(!email || !password){
    return handleError("name email and password are required")
  }
  try {
    const url = `http://localhost:4000/auth/login`
    const response = await fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })

    })
    const result = await response.json()
    const {success,message,error,jwtToken,name} = result
    if(success){
      handleSuccess(message)
      localStorage.setItem("token",jwtToken)
      localStorage.setItem("loggedInUser",name)
      console.log(email)
      if(email==="admin@gmail.com" && password==="1111"){
      window.location.href = "http://localhost:5174/"; // for admin route purpose
      }
      else{
        setTimeout(()=>{
          navigate('/')
        },1000)
      }

    }
    else if(error){
      const details = error.details[0].message
      handleError(details)

    }
    else if(!success){
      handleError(message)
    }

  } catch (error) {
    handleError(error)
  }
 }

  return (
    <div className="min-h-screen w-[1550px] flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inline-email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
              id="inline-email"
              type="email"
              placeholder="Enter Your Mail ID"
              name="email"
              onChange={(e) =>{setEmail(e.target.value)}}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inline-password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
              id="inline-password"
              type="password"
              placeholder="******************"
              onChange={(e) =>{setPassword(e.target.value)}}
              value={password}

            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
             Login
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Dont't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-800">
                Sign Up
              </Link>
              <ToastContainer />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};



/*
const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:4000/signup", { name, email, password })
    .then((result) => {
      console.log(result);
      navigate("/login");
      })
      .catch((err) => {
        console.log("Got an error while signing up", err);
      });
      };
      */
     
 export default Login;



















// import axios from "axios";
// import React, { createContext, useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [user,setUser] = useState("")
//   const Username = createContext()


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4000/login", { email, password })
//       .then((result) => {
//         console.log(result)
//         if (result.data.isAdmin) {
//           window.location.href = "http://localhost:5174/"; // for admin route purpose
//         } else if (result.data.message === "successful login") {
//           console.log(result.data.user)
//           localStorage.setItem("user",result.data.user)
//           setUser(result.data.user[0])

//           navigate("/");

//         } else {
//           setError(result.data);
//           console.log("Invalid credentials");
//         }
//       })
//       .catch((err) => {
//         console.log("got an error while login", err);
//       });
//   };

//   return (
//     <>
//     <div className="min-h-screen w-[1550px] sm:w-[500px]-sm  flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
//               id="username"
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
//               id="password"
//               name="password"
//               type="password"
//               placeholder="**********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {error && <h2 className="font-extrabold text-red-600 mb-5">{error}</h2>}
//           <div className="flex flex-col items-center">
//             <button
//               className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Sign In
//             </button>
//             <a className="mt-4 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//               Forgot Password?
//             </a>
//           </div>
//         </form>
//         <p className="text-center text-gray-500 text-xs mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:text-blue-800">
//             Sign Up
//           </Link>
//         </p>
//         <p className="text-center text-gray-500 text-xs mt-4">
//           &copy;2020 Acme Corp. All rights reserved.
//         </p>
//       </div>
//     </div>
//     <Username.Provider value={user}>
//       <Navbar user={user}/>
//     </Username.Provider>
//     </>
//   );
// };

// export default Login;
