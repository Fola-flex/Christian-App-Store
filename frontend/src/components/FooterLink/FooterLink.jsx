 import React, {forwardRef, useRef, useState, useEffect, memo } from 'react'
import { tiktok, twitter } from '../../assets';


const FooterLink = memo(forwardRef(({title, childLinks}, ref) => {  
    const titleRef = useRef(null);
    const [width, setWidth] = useState('auto');
  
    useEffect(() => {
        if (window.innerWidth <= 1700 && titleRef.current) {
          setWidth('auto');
        } else {
            const titleWidth = titleRef.current.offsetWidth;
            setWidth(`${titleWidth}px`);
        }
      }, [title, window.innerWidth, titleRef]);
    

  return (     
    <div style={{width}} ref={ref} className='flex flex-col min-w-0 xs:basis-[120px] text-white'>
        <p ref={titleRef} className='w-fit sm:w-auto text-white font-bold text-nowrap text-medium mb-2.5'>{title}</p>
        {childLinks && (
        <ul className='flex flex-col gap-[0.4rem] text-nowrap'>
            {childLinks.map((chidLink, i ) => {
                return (
                    <li key={chidLink.id || i} className='text-textSecondary font-google text-medium'>{chidLink.title}</li>
                )
            })}
        </ul>
        )}
    </div>
  )
}));

export default FooterLink