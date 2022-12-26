import React from 'react'
import { motion as m } from 'framer-motion'
import heroImg from '../assets/images/heroimg.png'

const Home = () => {
  return (
    <m.main 
      className='page'
      initial={{y: '100%'}}
      animate={{y: '0%'}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      >

    </m.main>
  )
}

export default Home