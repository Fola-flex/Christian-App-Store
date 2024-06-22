import React, { useEffect, useState } from 'react';
import { download, holy, twitter } from '../../assets';

const ToolSection = () => {
  return (
    <div className='flex flex-col'>
        <div className='py-[2.1rem] w-full h-full border-solid border-[#262626] border-t'> 
            <div className='w-full mb-8'>
                <p className='text-[#F4F4F4] font-google text-lg tracking-wide leading-secondary'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-x-[1.09rem] gap-y-5 flex-wrap'>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[2.1rem] w-full h-full border-solid border-[#262626] border-t'> 
            <div className='w-full mb-8'>
                <p className='text-[#F4F4F4] font-google text-lg tracking-wide leading-secondary'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-x-[1.09rem] gap-y-5 flex-wrap'>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[2.1rem] w-full h-full border-solid border-[#262626] border-t'> 
            <div className='w-full mb-8'>
                <p className='text-[#F4F4F4] font-google text-lg tracking-wide leading-secondary'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-x-[1.09rem] gap-y-5 flex-wrap'>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[2.1rem] w-full h-full border-solid border-[#262626] border-t'> 
            <div className='w-full mb-8'>
                <p className='text-[#F4F4F4] font-google text-lg tracking-wide leading-secondary'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex gap-x-[1.09rem] gap-y-5 flex-wrap'>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between w-[14.8rem] py-[0.8rem] px-[0.87rem] rounded-xl flex gap-[0.8rem] items-center'>
                    <div className='max-w-9'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap text-ellipsis text-medium tracking-wider'>YouVersion Bible</h1>
                        <p className='text-[0.73rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost tracking-[-0.01em] text-textSecondary'>Become everything God wants uou to</p>
                    </div>
                    <div className='max-w-5'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToolSection