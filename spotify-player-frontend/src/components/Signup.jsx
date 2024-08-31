import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from "../utils";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for default styles

const Signup = () => {
const navigate = useNavigate()
  // const [signupInfo,setSignupInfo] = useState({
  //   name:"",
  //   email:"",
  //   password:""
  // })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


//  const handleChange = (e)=>{
//   const {name,value} = e.target
//   console.log(name,value)
//   const copysignupInfo = {...signupInfo}
//   copysignupInfo[name] = value
//   setSignupInfo(copysignupInfo)

//  }

 const handleSignup = async(e)=>{
  e.preventDefault()
  if(!name || !email || !password){
    return handleError("name email and password are required")
  }
  try {
    const url = `http://localhost:4000/auth/signup`
    const response = await fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })

    })
    const result = await response.json()
    const {success,message,error} = result
    if(success){
      handleSuccess(message)
      setTimeout(()=>{
        navigate('/login')
      },1000)

    }
    else if(error){
      const details = error.details[0].message
      handleError(details)

    }
    else if(!success){
      handleError(message)
    }

  } catch (error) {
    handleError(err)
  }
 }

  return (
    <div className="min-h-screen w-[1550px] flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"
              id="inline-full-name"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              onChange={(e) =>{setName(e.target.value)}}
              value={name}
            />
          </div>
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
              Sign Up
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-800">
                Sign In
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
     
 export default Signup;