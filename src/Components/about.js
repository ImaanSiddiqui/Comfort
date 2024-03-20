import React from 'react'
import '../style/about.css'
import Main from '../assets/about.jpeg'
import play from '../assets/play.png'

export default function about() {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={Main} alt='' className='about-img'/>
            <img src={play} alt='' className='play-logo'/>
        </div>
        <div className='about-right'>
            <h3>About Our Confort Cooling System</h3>
            <h2> Our mission is to provide the best Services. </h2>
            <p> We Started This company Direct Solution with only the goal of serving pepole at our best</p>
            <p>we specialize in providing top-notch servicing and maintenance solutions for a variety 
                of household appliances, 
                ensuring your comfort and convenience are never compromised. 
                From air conditioners to washing machines and refrigerators,
                 our dedicated team of experts is committed to delivering reliable and efficient services
                  tailored to meet your specific needs. With years of experience in the industry,
                   we pride ourselves on our attention to detail and customer satisfaction,
                    striving to exceed expectations with every job we undertake. 
                    Whether it's routine maintenance or emergency repairs,
                     you can trust us to keep your appliances running smoothly,
                 allowing you to enjoy peace of mind and uninterrupted functionality in your home.</p>
        </div>
      
    </div>
  )
}
