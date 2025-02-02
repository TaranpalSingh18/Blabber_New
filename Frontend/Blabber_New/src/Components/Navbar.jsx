import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between items-center h-20 px-4 bg-color--midnight backdrop-filter backdrop-blur-md transition-colors duration-300 hover:bg-opacity-10'>
        <div className='flex items-center gap-10 ml-10'> 
        
          <img 
            src={logo} 
            alt="Logo"
            className='h-32 w-auto mt-4' 
          />
          <div className='flex gap-20'>
            <Link to="/" className='font-semibold py-5 text-white hover:text-gray-200 transition-colors'>
              Home
            </Link>
            <Link to="/About" className='font-semibold py-5 text-white hover:text-gray-200 transition-colors'>
              About
            </Link>
            <Link to="/Contact Us" className='font-semibold py-5 text-white hover:text-gray-200 transition-colors'>
              Contact Us
            </Link>
          </div>
        </div>

        <div className='flex gap-10 items-center mr-10'>
          <Link to="/Login" className='font-semibold py-5 text-white hover:text-gray-200 transition-colors'>
            Login
            </Link>
          <Link to="/Signup" className='font-semibold py-2 px-7 border border-white border-opacity-50 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
            Signup
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar