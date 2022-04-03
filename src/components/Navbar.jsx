import React from 'react'
import logo from '../logo.png';
function Navbar() {
  return (
    <div className='h-14 w-full flex items-center justify-between px-7 shadow-lg'>
    <div className='h-full w-14 flex items-center justify-center'>
      <img src={logo} alt=""  className='h-full w-full'/>
      <p>Pizza</p>
    </div>
    <ul className='flex h-full w-80 items-center justify-between'>
      <li>Menu</li>
      <li>Offer</li>
      <li>Orders</li>
      <li>Logout</li>
      <li className='bg-rose-600 p-1 w-12 h-7 flex items-center justify-center rounded-xl text-white'><i className="fa-solid fa-cart-shopping"></i></li>
    </ul>
  </div>
  )
}

export default Navbar