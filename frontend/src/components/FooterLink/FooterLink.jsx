import React, { memo } from 'react'
import { tiktok, twitter } from '../../assets';


const FooterLink = memo(({title, childLinks}) => {
  return (     
    <div className='flex flex-col flex-1 min-w-0 text-white'>
        <p className='text-white font-bold text-nowrap text-medium mb-2'>{title}</p>
        {childLinks && (
        <ul className='flex flex-col gap-1.5 text-nowrap'>
            {childLinks.map((chidLink, i ) => {
                return (
                    <li key={chidLink.id || i} className='text-textSecondary text-medium'>{chidLink.title}</li>
                )
            })}
        </ul>
        )}
    </div>
  )
});

export default FooterLink