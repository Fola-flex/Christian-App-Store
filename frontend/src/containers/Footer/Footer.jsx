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
        <div className="bg-footer px-[23.7rem] pt-[3.4rem] pb-4 lg:px-32 md:px-16 sm:px-4">
            <div className='sm:flex-wrap px-[2.95rem] lg:px-8 md:px-5 ss:px-2 pb-9 flex items-center ss:justify-center gap-[5.3rem] md:gap-14 border-b-2 mx-auto border-[#a3a3a3]'>
                {footerLinks.map((link, index) => {
                    return (
                        <FooterLink childLinks={link.childLinks} title={link.title} key={link.id || index} />
                    )
                })}
            </div>
            <div className='w-full ss:px-0 sm:px-5 flex-wrap sm:gap-5 sm:justify-center flex items-center justify-between px-[3.05rem] max-w-[56rem]'>
                <div className='text-textSecondary flex items-center gap-[0.57rem] pt-4'>
                    <p className='tracking-wide text-textSecondary text-[0.77rem]'><span className='text-[8px] mr-0.5 align-top'>&#169;</span>Christian App Store 2024</p>
                    <span className='text-[0.4rem]'>&#x2022;</span>
                    <p className=' tracking-wide font-semibold text-[0.77rem]'>Jesus is Lord</p>
                    <span className='text-textSecondary text-[0.4rem]'>&#x2022;</span>
                    <span className='tracking-wide text-textSecondary text-[0.77rem]'>Terms</span>
                    <span className='text-textSecondary text-[0.4rem]'>&#x2022;</span>
                    <p className='tracking-wide text-textSecondary text-[0.77rem]'>Sitemap</p>
                    <span className='text-textSecondary text-[0.4rem]'>&#x2022;</span>
                    <span className='tracking-wide text-textSecondary text-[0.77rem]'>Privacy</span>
                </div>
                <div>
                    <ul className='flex items-center gap-2 pt-[1.4rem] px-[0.55rem]'>
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
