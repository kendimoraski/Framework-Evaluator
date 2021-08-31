import React from 'react'
import ThemeChange from './ThemeChange'

const Navbar = () => {
  return (
    <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box'>
      <div className='flex-1 px-2 mx-2'>
        <span className='text-lg font-bold'>Framework Evaluator</span>
      </div>
      <div className='flex-none'>
        <ThemeChange />
      </div>
    </div>
  )
}

export default Navbar
