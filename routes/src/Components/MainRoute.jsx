import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Notfound from './Notfound'

function MainRoute() {
  return (
    <div>
<Navbar/>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<About/>} path='about' />
            <Route element={<Notfound/>} path='*' />
            
            {/* <Route element={</>} path='about' /> */}

            
        </Routes>
    </div>
  )
}

export default MainRoute