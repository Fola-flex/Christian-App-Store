import React from 'react';
import { arrow, hamburger, logo, host } from '../../assets';
import Search from '../Search/Search';

const topbar = () => {
  return (                             
    <div className='bg-secondary relative z-10 flex items-center shadows'>
        <div className='flex items-center px-9 xs:pl-5h py-[1.03rem] justify-between w-full'>
            <div className='flex justify-between items-center gap-x-[0.64rem] '>
                <div className='w-[1.61rem]'>
                    <img className='w-full h-full' src={logo} alt='Christian-app-store logo' />      
                </div>
                <div className='pt-[1px] xs:hidden'>
                    <p className='font-moon text-[0.93rem] sm:text-[0.55rem] leading-9 tracking-[0.174rem] text-white'>CHRISTIAN APP STORE</p>
                </div>
            </div>
            <div className='w-[25.2rem] mr-1.5 sm:hidden'>
                <Search />
            </div>
            <div className='flex items-center'>
                <div className='bg-[#353637] flex pl-[0.8rem] pr-1.5 py-[0.35rem] gap-2.5 items-center mx-auto w-full rounded-3xl'>
                    <button>
                        <img className='h-[0.85rem]' src={hamburger} alt='Hamburger icon' />
                    </button>
                    <img className='h-full w-[2rem]' src={host} alt='Host Icon'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar
