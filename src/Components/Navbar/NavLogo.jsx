import React from 'react'

const NavLogo = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className="h-10 w-10">
        <img
          src='Logo.png'
          alt='logo'
          className='h-full w-full'/>
        </div>
        <h1 className='text-2xl font-bold uppercase'>Brand</h1>
    </div>
  )
}

export default NavLogo
