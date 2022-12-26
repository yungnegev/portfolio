import React from 'react'
import { motion as m } from 'framer-motion'
import heroImg from '../assets/images/heroimg.png'
import SkillsCarousel from '../components/SkillsCarousel'

const Home = () => {
  return (
    <m.main 
      className='page'
      initial={{y: '100%'}}
      animate={{y: '0%'}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      >
        <div className='home-page page-wrapper'>
            <section className='hero-section'>
                <div className='hero-left'>
                    <h1>Arthur <br /> Zimuldinov</h1>
                    <h2>FRONT END WEB DEVELOPER</h2>
                </div>
                <div className='hero-right'>
                    <img src={heroImg} alt='heroimg' />
                </div>
            </section>
            <section className='carousel-wrapper'>
                <SkillsCarousel />
            </section>
        </div>
    </m.main>
  )
}

export default Home