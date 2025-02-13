import React from 'react'
import Navbar from "../src/components/Navbar/Navbar"
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import About from './pages/About/About'
import Ourservices from './pages/Ourservices/Ourservices'
import Contact from './pages/Contact/Contact'

export default function App() {

  
  return (

    <div>
     <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/ourservices" element={<Ourservices/>} />
      <Route path='/contact' element={<Contact/>}/>
     </Routes>

    
     </BrowserRouter>
    </div>
  )
}

