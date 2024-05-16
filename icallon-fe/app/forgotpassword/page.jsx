"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submitting the email for password reset
    console.log('Email submitted:', email);
  };

  return (
    <div className=" mx-auto mt-8 px-25 py-10 pl-20"> 
      <img className="w-24" src="/app_logo.png" alt="App Logo" />
      <div className="gap-2">
        <h2 className="text-xl mt-16">Forgot Password?</h2>  
      <p className="text-yellow-500 block mb-16 text-sm">Enter your email below to receive a password reset link</p>
      </div>

      
      <div className="mt-4">
        <label className="block">Your Email</label>
        <input
          type="email"
          className=" p-3 px-40  block  border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      {/* Reset Password Button */}
      <div className="mt-10 block">
        <Button variant="default"
          className="p-3 px-40 "
          onClick={handleSubmit}
        >
          Reset Password
        </Button>
      </div>

      {/* Sign Up Link */}
      <div className="mt-14">
        <p className='text-md '>
          Don't have an account? <a href="/signup"
          className="hover:text-yellow-500 hover:border-b hover:border-yellow-500">
            Sign Up
            </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
