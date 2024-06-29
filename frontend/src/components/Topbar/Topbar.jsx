import React from 'react';
import { arrow, hamburger, logo, host } from '../../assets';

const topbar = () => {
  return (                             
    <div className='bg-secondary relative z-10 flex items-center shadows'>
        <div className='flex items-center px-9 py-[1.02rem] justify-between w-full'>
            <div className='flex justify-between items-center gap-x-[0.6rem] '>
                <div className='w-[25px]'>
                    <img className='w-full h-full' src={logo} alt='Christian-app-store logo' />      
                </div>
                <div className='pt-[2px]'>
                    <p className='font-moon text-[0.89rem] tracking-[0.175rem] text-white'>CHRISTIAN APP STORE</p>
                </div>
            </div>
            <div className='w-[24.5rem] mr-1'>
                <div className='w-full flex items-center my-auto relative'>
                    <img className="absolute px-[0.7rem] h-[0.9rem]" src={arrow} />
                    <input className='bg-[#353637] w-full py-1.5 text-white pl-9 pr-2 rounded-xl' type='search' />
                </div>
                
            </div>
            <div className='flex items-center'>
                <div className='bg-[#353637] flex pl-3 pr-1 py-[0.3rem] gap-3 items-center mx-auto w-full rounded-3xl'>
                    <img src={hamburger} alt='Hamburger icon' />
                    <img className='w-full h-[1.9rem]' src={host} alt='Host Icon'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar
