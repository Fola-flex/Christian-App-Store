import React from 'react';

const Button = ({ src, alt, title, width, onclickFunction}) => {
  return (
    <button 
        className="bg-[#343434] font-google flex items-center gap-2 justify-start pl-3 py-[0.4rem] text-[0.98rem] text-white rounded-lg hover:bg-gray-500 hover:text-hover active:text-[#00A6FF]"
        onClick={onclickFunction}
    >
        <img className="" width={width} src={src} alt={alt} />
        {title}
    </button>
  )
}

export default Button