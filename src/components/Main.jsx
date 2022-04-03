import React from 'react'
import pizza from '../bg.png'
function Main() {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-start bg-slate-100 px-10'>
        <div className='w-1/2 mx-9 h-4/6 flex flex-col items-start justify-center'>
          <p className='capitalize px-2'>Are you hungry ?</p>
          <p className='capitalize text-6xl font-bold my-3'>Don't Wait !</p>
          <button className=" w-24 bg-rose-600 text-white first-letter p-1 px-2 rounded-3xl hover:mx-1">Order Now</button>
        </div>
        <div className='w-1/2 h-4/6 flex items-center justify-center'>
          <img src={pizza} alt="" className='w-96 h-96' />
        </div>
      </div>

    </>
  )
}

export default Main