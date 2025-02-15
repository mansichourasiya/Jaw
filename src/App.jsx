import React from 'react'
import Navbar from "../src/components/Navbar/Navbar"
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import About from './pages/About/About'
import Ourservices from './pages/Ourservices/Ourservices'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import Community from './pages/Community/Community'


export default function App() {

  
  return (

    <div>
     <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/ourservices" element={<Ourservices/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/community' element={<Community/>}/>
     </Routes>

   <Footer/>   
     </BrowserRouter>
    </div>
  )
}

