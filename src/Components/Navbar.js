import React, { useState } from 'react'
import logo from '../assets/logo4.png'
import '../style/Navbar.css'
import Menu from '../assets/list.png'
import { Link } from 'react-scroll'
import Whatsapp from './whatsapp'
import call from '../assets/call2.png'

export default function Navbar() {


  const [mobileMenu,setMobileMenu] = useState(true)

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true);

  }
  return (
    <div>
        <nav className='container'>
            <img src={logo} alt=''className='logo'/>
            
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='view' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
                
                <li><Link className='btn nav-btn' to='contact' smooth={true} offset={-180} duration={500}>Contact Us</Link></li>
                
               
                <div className='touch'>
                <li className='whatsapp'><Whatsapp/></li>
                <li  className='call'><a href='tel:+917770035469'><img src={call} alt=''/></a></li>
               
                
                 
                 </div>

            </ul>
            <img src={Menu} alt='' className='menu-icon' onClick={toggleMenu}/>
            
        </nav>
      
    </div>
  )
}
