import React from 'react';

const Button = ({ src, alt, title, width, height, onclickFunction}) => {
  return (
    <button 
        className="bg-[#343434] font-googleMedium flex items-center gap-[0.468rem] justify-start pl-3 py-[0.385rem] text-[0.95rem] text-white rounded-lg hover:bg-gray-500  hover:text-hover active:text-[#00A6FF]"
        onClick={onclickFunction}
    >
        <img className="" height={height} width={width} src={src} alt={alt} />
        <span className='pt-[1.5px]'>{title}</span>
    </button>
  )
}

export default Button