import React from 'react'
import whatsappi from '../assets/whatsapp-icon.png'
import '../style/whatsapp.css'

export default function whatsapp() {



  

    const phoneNUmber = '+917770035469';
    const message = 'Hello, I Want Your Service Can I connect with you'
    const whatsappUrl = `https://wa.me/${phoneNUmber}?text=${encodeURIComponent(message)}`
  return (
    <div className='whatsapp'>

        <a href={whatsappUrl} target='_blank' rel='noopener noreferrer'><img src={whatsappi} alt=''/></a>

      
    </div>
  )
}
