import React, { useEffect, useState} from 'react';
import { client } from '../../client';

const Navbar = () => {
    const [navbarLinks, setnavbarLinks ] = useState([]);
    const Menu = () => {
        return (  
            <ul className='pt-[0.05rem] flex items-center w-full justify-evenly text-white'>
                {navbarLinks.map((value, index) => {
                    return (
                        <li className='font-google tracking-[0.0395em] hover:text-hover cursor-pointer listItem text-[0.84375rem]' key={index}>{value.title}</li>    
                    )
                })}
            </ul>
        )
    }
    
    useEffect(() => {
        client
            .fetch(`*[_type == "navbar"]{
                links
            }.links`)
            .then((data) => {
                setnavbarLinks(data[0])
            })
            .catch(err => console.err(err))
    }, [])
    
  return (
    <nav className='bg-[#202020] overflow-x-scroll no-scrollbar w-full flex items-center py-[0.725rem]'>   
        <Menu />
    </nav>
  )
}

export default Navbar