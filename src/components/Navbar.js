import React from 'react'
import { Link } from 'react-router-dom'
import Sword from '../assets/sword.png'
import {FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './NavbarStyles.css';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    console.log(click);
    
  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to={'/'}>
                   <h1>LOGO</h1>
                </Link>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>pricing</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>FAQ</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Contact</Link> 
                    </li>
                   
                   
                </ul>
                <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}
                </div>
           
        </nav>
    </header>
  )
}

export default Navbar