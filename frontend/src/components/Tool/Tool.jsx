import React from 'react';
import { holy, download } from '../../assets';

const Tool = ({ appImage, appIcon}) => {
  return (
    <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
        <div className='w-[3.54rem] h-[2.5rem]'>
            <img className='w-full h-full' src={appImage} alt="" />
        </div>
        <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
            <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
            <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
        </div>
        <div className='w-[2.1rem]'> 
            <img  className='w-full' src={appIcon} alt="" />
        </div>
    </div>
  )
}

export default Tool