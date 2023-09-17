// 1. Create a navbar (Easier)
    // 1. make a Navbar component x
    // 2. make a NavbarButton component x
    // 3. import NavbarButton into Navbar x
    // 4. Make 4 NavbarButton in Navbar x
    // 5. import Navbar into App.js and make 1 Navbar

import React from 'react'
import NavbarButton from '../NavbarButton'
import './index.css'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>Navbar Component</div>
      <div className='navbar-button-container'>
        <NavbarButton />
        <NavbarButton />
        <NavbarButton />
        <NavbarButton />
      </div>
      
    </div>
  )
}

export default Navbar
