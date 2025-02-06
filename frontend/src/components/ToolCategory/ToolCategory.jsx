import React from 'react';
import Tool from '../Tool/Tool';
import { download, holy } from '../../assets';

const ToolCategory = () => {
  return (
    <div className='pt-[2.12rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-[1px]'> 
        <div className='w-full mb-[2.05rem]'>
            <p className='text-[#F4F4F4] font-googleMedium text-[1.25rem]'>Try These Faith Driven Favorites</p>
        </div>
        <div className='flex gap-[1.275rem] flex-wrap'>
        {
            Array.from(Array(10)).map((v,i) => <Tool appImage={holy} appIcon={download} key={i} />)
        }
        </div>
    </div>
  )
}

export default ToolCategory