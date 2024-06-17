import React, { useEffect, useState } from 'react';
import { download, holy, twitter } from '../../assets';

const ToolSection = () => {
  return (
    <div className='py-9 w-full h-full border-solid border-[#262626] border-y-2 '> 
        <div className='w-full mb-8'>
            <p className='text-[#F4F4F4] font-google text-lg tracking-wide leading-secondary'>Try These Faith Driven Favorites</p>
        </div>
        <div className='flex gap-4 flex-wrap'>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={holy} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={download} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            <div className='bg-[#191919] max-w-80 p-3 rounded-xl flex gap-3.5 items-center'>
                <div className='w-9'>
                    <img className='w-full' src={twitter} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-white text-medium tracking-wider'>YouVersion Bible</h1>
                    <p className='text-[0.73rem] font-jost tracking-[-0.01em] text-textSecondary'>Become everything God...</p>
                </div>
                <div className='w-5'>
                    <img  className='w-full' src={twitter} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ToolSection