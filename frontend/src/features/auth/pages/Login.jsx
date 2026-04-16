import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from "../../../redux/authSlice/authSlice.js";
import { useDispatch } from "react-redux";
const Login = () => {

  const dispatch= useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password);
    dispatch(loginUser({
      useremail:email,
      password
    }))
    setEmail("")
    setPassword("")
  }

  return (
    <div className='min-h-screen flex justify-center items-center px-3 py-6'>
      <div className='w-full max-w-sm rounded-xl border border-blue-900/40 bg-[#0f172a]/90 backdrop-blur-md shadow-2xl shadow-blue-950/40 p-5 sm:p-6'>
        <div className='flex justify-center items-center mb-5'>
          <h1 className='text-2xl font-bold text-blue-100 tracking-wide'>
            LogIn
          </h1>
        </div>

        <div className='space-y-4'>
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-blue-200'>
              UserEmail
            </label>
            <input
              value={email}
              className='w-full rounded-lg border border-blue-800 bg-[#1e293b] px-3 py-2.5 text-sm text-white placeholder:text-blue-400 outline-none transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='userEmail'
              type="text"
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-blue-200'>
              Password
            </label>
            <input
              className='w-full rounded-lg border border-blue-800 bg-[#1e293b] px-3 py-2.5 text-sm text-white placeholder:text-blue-400 outline-none transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              type="password"
            />
          </div>

          <button
            onClick={handleSubmit}
            className='w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-500 active:scale-[0.98] shadow-lg shadow-blue-900/40'
          >
            Submit
          </button>

          <p className='text-center text-xs sm:text-sm text-blue-200 pt-1'>
            Don&apos;t have an account?{" "}
            <span
              onClick={()=>navigate("/register")}
            className='text-blue-400 font-semibold cursor-pointer hover:text-blue-300 transition'>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login