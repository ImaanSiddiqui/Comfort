import React from 'react'
import '../style/Services.css'
import washing from '../assets/washing.jpg'
import AC from '../assets/Ac.avif'
import fridge from '../assets/fridge.jpg'
import washing2 from '../assets/washing2.jpg'
import fridge2 from '../assets/fridge2.jpg'
import Ac2 from '../assets/Ac2.jpg'


export default function Services() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={washing} alt=''/>
            <div className='caption'>
                <img src={washing2} alt=''/>
                <p>Wahing Machine Service</p>
            </div>

        </div>
        <div className='program'>
            <img src={fridge} alt=''/>
            <div className='caption'>
                <img src={fridge2} alt=''/>
                <p>Refregator Service</p>
            </div>
            
        </div>
        <div className='program'>
            <img src={AC} alt=''/>
            <div className='caption'>
                <img src={Ac2} alt=''/>
                <p>Air-Conditoner Service</p>
            </div>
            
        </div>

      
    </div>
  )
}
