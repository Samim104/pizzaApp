import React from 'react'
import logo from '../bg.png';
function Navbar() {
  return (
    <div className='h-14 w-full flex items-center justify-between px-7 shadow-lg'>
    <div className='h-full w-14 flex items-center justify-center'>
      <img src={logo} alt=""  className='h-full w-full'/>
      <p>Pizza</p>
    </div>
    <ul className='flex h-full w-96 items-center justify-between'>
      <li>Menu</li>
      <li>Offer</li>
      <li>MY Orders</li>
      <li>Logout</li>
      <li>cart</li>
    </ul>
  </div>
  )
}

export default Navbar