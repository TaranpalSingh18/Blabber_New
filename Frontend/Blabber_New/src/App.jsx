import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Statistics from './Components/Statistics';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Signup from './Components/Signup';

function App() {
  return (
    <div className='bg-black w-full min-h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Statistics />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Statistics />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
        
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
        
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <ContactUs />
              <Footer />
            
            </>
          }
        />
      </Routes>
     
    </div>
  );
}

export default App;
