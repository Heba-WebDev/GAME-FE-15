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
    <div className="absolute inset-0 flex justify-start items-center bg-transparent">
      <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-md bg-white shadow-lg">
        <img className="w-24 mx-0 mb-6" src="/app_logo.png" alt="App Logo" />
        <h2 className="text-2xl font-bold">Forgot Password?</h2>
        <p className="text-yellow-500 text-sm mb-6">Enter your email below to receive a password reset link</p>

        <div className="mt-4">
          <label className="block">Your Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-center"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Reset Password Button */}
        <div className="mt-6">
          <Button variant="default" className="w-full" onClick={handleSubmit}>
            Reset Password
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-left">
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="hover:text-yellow-500 hover:border-b hover:border-yellow-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
