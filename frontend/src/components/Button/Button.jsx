import React from 'react';

const Button = ({ src, alt, title, width}) => {
  return (
    <button className="bg-[#343434] font-google flex items-center gap-1.5 justify-start pl-3 py-[0.3rem] text-[0.875rem] text-white rounded-lg active:text-[#00A6FF]">
        <img className="" width={width} src={src} alt={alt} />
        {title}
    </button>
  )
}

export default Button