import React from 'react';
import { arrow, hamburger, logo, host } from '../../assets';

const topbar = () => {
  return (                             
    <div className='bg-secondary relative z-10 flex items-center shadows'>
        <div className='flex items-center px-8 py-[15px] justify-between w-full'>
            <div className='flex justify-between items-center gap-x-2.5 '>
                <div className='w-[22px]'>
                    <img className='w-full h-full' src={logo} alt='Christian-app-store logo' />      
                </div>
                <div className='pt-[1px]'>
                    <p className='font-moon text-[13px] tracking-[0.15rem] text-white'>CHRISTIAN APP STORE</p>
                </div>
            </div>
            <div className='w-[22rem]'>
                <div className='w-full flex items-center rounded-lg relative'>
                    <img className="absolute px-3" src={arrow} />
                    <input className='bg-[#353637] w-full h-[1.9rem] text-white pl-9 pr-2 rounded-lg' type='search' />
                </div>
                
            </div>
            <div className='flex items-center'>
                <div className='bg-[#353637] flex pl-2.5 pr-1 gap-2 items-center py-1 mx-auto w-full h-9 rounded-3xl'>
                    <img src={hamburger} alt='Hamburger icon' />
                    <img className='w-full h-full' src={host} alt='Host Icon'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar
