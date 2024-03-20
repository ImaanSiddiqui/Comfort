import React from 'react'
import '../style/View.css'
import call from '../assets/telephone.png'

function View() {
  return (
    <div className='view container' >
        <div className='hero-text'>
            <h1>LG Service Center </h1>
            <p>Refridgerator, washing Machine, Air Conditioner & Dish Washer Repair
              Service & Maintenance
              Single Visit Solution On Same Day Of Booking
            </p>
            <a className='btn' href='tel:+919730310865'> <img src={call} alt=''/> Call Us</a>
        </div>

      
    </div>
  )
}

export default View
