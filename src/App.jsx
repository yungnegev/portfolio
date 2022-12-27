import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './components/MyRoutes'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'



const App = () => {

  return (
    <div className='app'>
      <AnimatePresence mode='wait'>
        <BrowserRouter>
          <Toaster />
          <Navbar/>
          <MyRoutes />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  )
}

export default App