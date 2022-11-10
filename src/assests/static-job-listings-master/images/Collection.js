import React from 'react'
import backgroundMobile from './bg-header-mobile.svg'
import backgroundDesktop from './bg-header-desktop.svg'

const Collection = () => {
  return (
    <div className='bg-Dark-Cyan w-full' >
        <img src={backgroundMobile} alt="" className=' w-full  md:hidden' />
        <img src={backgroundDesktop} alt="" className='  w-full hidden md:block lg:block' />
    </div>
  )
}

export default Collection