import React from 'react'
import '../css/Header.css'
import '../index.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-text'>
        <p className='text-center'>Let’s create something great together.</p>
      </div>
      <div className='images'>
        <img className='header-image' src="./src/assets/Resim7.png" alt="" />
        <img className='header-image2' src="./src/assets/Resim6.png" alt="" />
      </div>
    </div>

  )
}

export default Header