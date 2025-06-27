"use client"
import { Eye, EyeOff } from 'lucide-react';
import { FaTwitter } from "react-icons/fa";
import React from 'react'
import { useState } from "react";

 const page = () => {
     const [formData, setFormData] = useState({
         email: '',
         password: '',
         confirmPassword: '',
       });
     
       const [errors, setErrors] = useState({});
       const [showPassword, setShowPassword] = useState(false);
       const [showConfirm, setShowConfirm] = useState(false);
     
       const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
         setErrors({ ...errors, [e.target.name]: '' }); // clear error
       };
     
       const validate = () => {
         const newErrors = {};
     
         // Email validation
         if (!formData.email.trim()) {
           newErrors.email = 'Email is required';
         } else if (
           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
         ) {
           newErrors.email = 'Enter a valid email';
         }
     
         // Password validation
         if (!formData.password.trim()) {
           newErrors.password = 'Password is required';
         } else if (formData.password.length < 6) {
           newErrors.password = 'Password must be at least 6 characters';
         }
     
         // Confirm password
         if (formData.confirmPassword !== formData.password) {
           newErrors.confirmPassword = 'Passwords do not match';
         }
     
         setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
       };
     
       const handleSubmit = (e) => {
         e.preventDefault();
         if (validate()) {
           console.log('Form submitted:', formData);
           // Handle form submission here (API call, redirect, etc.)
         }
       };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Sign up.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-md shadow-2xl px-10 py-6 rounded-2xl w-full max-w-md border border-white/30">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-black"><FaTwitter size={28} className='text-primary'/>Sign in</h2>
        
        <div className='flex justify-between gap-4 text-gray-600'>
          <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
            <img src='/google.png' alt='google' className='w-4.5'/>
          </div>

          <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
            <img src='/facebook.png' alt='facebook' className='w-4.5'/>
          </div>

          <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
            <img src='/insta.png' alt='insta' className='w-7.5'/>
          </div>   
        </div>

        <div className='relative flex items-center justify-between text-black/30 pt-4 pb-2'>
          <hr className='border-1 border-black/10 w-[46%]'/>
          <p className='text-sm mt-[-2px]'>or</p>
          <hr className='border-1 border-black/10 w-[46%]'/>
        </div>

         <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-black">Username</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="anna_XOXO"
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="user@email.com"
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full text-[14px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center gap-1 text-sm text-gray-700 cursor-pointer"
              >
               {showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}

            <div className='text-[13px] flex justify-between pt-2'>
              <a href=" " className="text-primary hover:underline">
                Forgot Password?
              </a>
              <a href=" " className="text-primary hover:underline">
                Create New Password
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DA1F2] transition text-white py-2 mt-1 rounded-md font-medium cursor-pointer"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-2">
          Don't have an account yet?{" "}
          <a href="/SignUp" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
