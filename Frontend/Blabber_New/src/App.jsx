import React from 'react'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Statistics from './Components/Statistics'
import Footer from './Components/Footer'
import Hero from './Components/Hero'

function App() {
  return (
    <div className='bg-black w-full h-screen flex flex-col'>
      <Navbar/>
      <Hero />

      <Statistics/> 
       <Footer/>

    </div>
  )
}

export default App