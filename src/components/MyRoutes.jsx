import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'


const myRoutes = () => {

  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

export default myRoutes