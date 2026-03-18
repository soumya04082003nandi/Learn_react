import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen flex px-12 py-6 justify-between'>
      <div className="navLeft ">
        <h2 className=''>Folioblox</h2>
      </div>
      <div className="navRight w-[40%] text-xs font-light pl-10 flex justify-evenly items-center">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <button className='px-2 py-2 text-blue-950 font-medium rounded-full bg-amber-50'>Get in touch <span className='ml-1 px-1 items-center py-1 rounded-full bg-orange-500'>{'-->'}</span></button>
    
      </div>
    </div>
  )
}

export default Navbar 
