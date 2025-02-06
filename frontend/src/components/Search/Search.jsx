import React from 'react';
import { arrow } from '../../assets';

const Search = () => {
  return (
    <div className='w-full flex items-center my-auto relative'>
        <img className="absolute px-[0.7rem] w-[2.45rem] pt-0.5" src={arrow} />
        <input className='bg-[#353637] w-full py-[0.39rem] text-white pl-9 pr-2 rounded-xl' type='search' />
    </div>
  )
}

export default Search