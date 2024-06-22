import React, { useState, useEffect } from 'react';
import { tiktok, twitter } from '../../assets';
import { FooterLink } from '../../components';
import { client } from '../../client';

const Footer = () => {
    const [ footerLinks, setfooterLinks ] = useState([]);
    
    useEffect(() => {
        client
            .fetch(`*[_type == "footer"]{
                links
            }.links`)
            .then((data) => {
                setfooterLinks(data[0])
            })
            .catch(err => console.error(err))
    }, [])

  return (
    <footer>
        <div className="bg-footer px-[21.5rem] pt-12 pb-4 lg:px-32 md:px-16 sm:px-4">
            <div className='sm:flex-wrap px-9 lg:px-8 md:px-5 ss:px-2 pb-9 flex items-center justify-center ss:justify-center gap-[6rem] md:gap-14 border-b-2 mx-auto border-[#A3A3A3]'>
                {footerLinks.map((link, index) => {
                    return (
                        <FooterLink childLinks={link.childLinks} title={link.title} key={link.id || index} />
                    )
                })}
            </div>
            <div className='w-full ss:px-0 sm:px-5 flex-wrap sm:gap-5 sm:justify-center flex items-center justify-between px-10 max-w-[56rem]'>
                <div className='text-textSecondary flex items-center gap-1 pt-3'>
                    <p className='text-textSecondary text-medium'><span className='text-[8px] align-top'>&#169;</span>Christian App Store 2024</p>
                    <span>&#x2022;</span>
                    <p className='text-medium font-bold'>Jesus is Lord</p>
                    <span className='text-textSecondary'>&#x2022;</span>
                    <span className='text-textSecondary text-medium'>Terms</span>
                    <span className='text-textSecondary'>&#x2022;</span>
                    <p className='text-textSecondary text-medium'>Sitemap</p>
                    <span>&#x2022;</span>
                    <span className='text-textSecondary text-medium'>Privacy</span>
                </div>
                <div>
                    <ul className='flex items-center gap-2'>
                        <li><img className='w-full' src={twitter} alt='Twitter icon'></img></li>
                        <li><img className='w-full' src={tiktok} alt='Twitter icon'></img></li>
                        <li><img src={twitter} alt='Twitter icon'></img></li>
                        <li><img src={twitter} alt='Twitter icon'></img></li>
                        <li><img src={twitter} alt='Twitter icon'></img></li>
                        <li><img src={twitter} alt='Twitter icon'></img></li>
                    </ul>
                </div>    
            </div>    
        </div>
    </footer>
  )
}

export default Footer