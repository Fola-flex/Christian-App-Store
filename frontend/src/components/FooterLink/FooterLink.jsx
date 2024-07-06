 import React, {forwardRef, useRef, useState, useEffect, memo } from 'react'
import { tiktok, twitter } from '../../assets';


const FooterLink = memo(forwardRef(({title, childLinks}, ref) => {  
    const titleRef = useRef(null);
    const [width, setWidth] = useState('auto');
  
    useEffect(() => {
      if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        setWidth(`${titleWidth}px`);

      }
    }, [title]);

  return (     
    <div style={{width}} ref={ref} className='flex flex-col text-white'>
        <p ref={titleRef} className='w-fit text-white font-bold text-nowrap text-medium mb-2.5'>{title}</p>
        {childLinks && (
        <ul className='flex flex-col gap-[0.4rem] text-nowrap'>
            {childLinks.map((chidLink, i ) => {
                return (
                    <li key={chidLink.id || i} className='text-textSecondary text-medium'>{chidLink.title}</li>
                )
            })}
        </ul>
        )}
    </div>
  )
}));

export default FooterLink