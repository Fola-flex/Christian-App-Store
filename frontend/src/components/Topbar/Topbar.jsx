import React from 'react';
import { arrow, hamburger, logo, host } from '../../assets';

const topbar = () => {
  return (                             
    <div className='bg-secondary relative z-10 flex items-center shadows'>
        <div className='flex items-center px-9 py-[1.03rem] justify-between w-full'>
            <div className='flex justify-between items-center gap-x-[0.64rem] '>
                <div className='w-[1.61rem]'>
                    <img className='w-full h-full' src={logo} alt='Christian-app-store logo' />      
                </div>
                <div className='pt-[1px]'>
                    <p className='font-moon text-[0.93rem] leading-9 tracking-[0.174rem] text-white'>CHRISTIAN APP STORE</p>
                </div>
            </div>
            <div className='w-[25.2rem] mr-1.5'>
                <div className='w-full flex items-center my-auto relative'>
                    <img className="absolute px-[0.7rem] w-[2.45rem] pt-0.5" src={arrow} />
                    <input className='bg-[#353637] w-full py-[0.39rem] text-white pl-9 pr-2 rounded-xl' type='search' />
                </div>
                
            </div>
            <div className='flex items-center'>
                <div className='bg-[#353637] flex pl-[0.8rem] pr-1.5 py-[0.35rem] gap-2.5 items-center mx-auto w-full rounded-3xl'>
                    <img className='h-[0.85rem]' src={hamburger}  alt='Hamburger icon' />
                    <img className='h-full w-[2rem]' src={host} alt='Host Icon'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar
