import React from 'react'
import images from '../assets/images/logos/index'

let $items =  images.map((item, index) => {
    return (
        <div className='carousel-card'>
            <img src={item.src} alt='logo' />
            <div className='card-desc'>{item.name}</div>
        </div>
    )
})


const SkillsCarousel = () => {
  return (
    <div className='carousel'>
        <div className='carousel-title'>
            <h1>The tools I use.</h1>
        </div>
        <div className="carousel-feed">
            {$items}
        </div>
    </div>  
  )
}

export default SkillsCarousel