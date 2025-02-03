import React, { useState } from "react";
import call from '../assets/call.png'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? "Image Chosen" : "Choose Your Profile Pic");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center relative">
          <img
          src={call}
            alt="Skeleton illustration"
            className=" object-fit"
          />
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="text-white space-y-4">
            <h1 className="text-2xl font-bold">blabber</h1>
            <h2 className="text-3xl font-bold">Never used Blabber before?</h2>
            <p className="text-emerald-400">Sign Up ASAP</p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-600 rounded-full text-white hover:bg-gray-900 transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              required
            />
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              required
            />

            {/* File Upload Button */}
            <div className="text-white font-thinner flex items-center justify-center px-4 py-3">
              <label className="mr-auto px-6 py-3 bg-emerald-400 text-black font-medium rounded-lg cursor-pointer hover:bg-white transition duration-300">
                {fileName || "Choose Your Profile Pic"}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-emerald-400 text-black rounded-full font-semibold hover:bg-emerald-500 transition-colors"
            >
              Start Blabbering!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
