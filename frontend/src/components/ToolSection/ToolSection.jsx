import React, { useEffect, useState } from 'react';
import { download, holy, twitter } from '../../assets';

const ToolSection = () => {
  return (
    <div className='flex flex-col'>
        <div className='pt-[2.12rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-[1px]'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-googleMedium text-[1.25rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-[1.275rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-[2.12rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-[1px]'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-googleMedium text-[1.25rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-[1.275rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-[2.12rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-[1px]'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-googleMedium text-[1.25rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-[1.275rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-[2.12rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-[1px]'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-googleMedium text-[1.25rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-[1.275rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.8rem] pl-[1rem] pr-[0.9rem] py-[0.9rem] rounded-xl flex gap-[0.9375rem] items-center'>
                    <div className='w-[3.54rem] h-[2.5rem]'>
                        <img className='w-full h-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white font-googleMedium overflow-hidden whitespace-nowrap text-ellipsis text-[0.9375rem]'>YouVersion Bible</h1>
                        <p className='text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='w-[2.1rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ToolSection