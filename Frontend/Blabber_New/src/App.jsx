import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Statistics from './Components/Statistics'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Signup from './Components/Signup'


function App() {
  return (
    <div className='bg-black w-full h-screen flex flex-col'>

      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
      <Hero />

      <Statistics/> 
       <Footer/>

    </div>
  )
}

export default App