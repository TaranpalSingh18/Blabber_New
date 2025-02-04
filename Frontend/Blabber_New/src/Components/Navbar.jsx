import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md'>
      <div className='flex justify-between items-center h-20 px-4'>
        <div className='flex items-center gap-10 ml-10'> 
          <img 
            src={logo} 
            alt="Logo"
            className='h-32 w-auto mt-4' 
          />
          <div className='flex gap-10'>
            <Link to="/" className='font-semibold text-white hover:text-gray-300 transition'>
              Home
            </Link>
            <Link to="/about" className='font-semibold text-white hover:text-gray-300 transition'>
              About
            </Link>
            <Link to="/contactus" className='font-semibold text-white hover:text-gray-300 transition'>
              Contact Us
            </Link>
          </div>
        </div>
        <div className='flex gap-6 mr-10'>
          <Link to="/login" className='font-semibold text-white hover:text-gray-300 transition mt-2'>
            Login
          </Link>
          <Link to="/signup" className='font-semibold py-2 px-5 border border-white rounded-full text-white hover:bg-white hover:text-black transition'>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
