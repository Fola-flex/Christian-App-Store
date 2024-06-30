import React, { useEffect, useState } from 'react';
import { download, holy, twitter } from '../../assets';

const ToolSection = () => {
  return (
    <div className='flex flex-col'>
        <div className='pt-[2.16rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-2'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-google text-[1.2rem] tracking-[0.05rem] leading-[1.8rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex justify-between gap-y-[1.35rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className='pt-[2.16rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-2'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-google text-[1.2rem] tracking-[0.05rem] leading-[1.8rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex justify-between gap-y-[1.35rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className='pt-[2.16rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-2'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-google text-[1.2rem] tracking-[0.05rem] leading-[1.8rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex justify-between gap-y-[1.35rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className='pt-[2.16rem] pb-[2.6rem] w-full h-full border-solid border-[#262626] border-t-2'> 
            <div className='w-full mb-[2.05rem]'>
                <p className='text-[#F4F4F4] font-google text-[1.2rem] tracking-[0.05rem] leading-[1.8rem]'>Try These Faith Driven Favorites</p>
            </div>
            <div className='flex justify-between gap-y-[1.35rem] flex-wrap'>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                <div className='bg-[#191919] justify-between max-w-[16.84rem] pl-[1rem] pr-[0.87rem] py-[0.88rem] rounded-xl flex gap-[1rem] items-center'>
                    <div className='max-w-[2.47rem]'>
                        <img className='w-full' src={holy} alt="" />
                    </div>
                    <div className='overflow-hidden flex flex-col whitespace-nowrap text-ellipsis'>
                        <h1 className='text-white overflow-hidden whitespace-nowrap leading-[1.4rem] text-ellipsis text-[0.9rem] tracking-[0.044rem]'>YouVersion Bible</h1>
                        <p className='text-[0.81rem] overflow-hidden whitespace-nowrap text-ellipsis font-jost text-textSecondary'>Become everything God wants you to</p>
                    </div>
                    <div className='max-w-[1.45rem]'> 
                        <img  className='w-full' src={download} alt="" />
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default ToolSection