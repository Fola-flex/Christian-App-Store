import React, { useEffect, useState} from 'react';
import { client } from '../../client';

const Navbar = () => {
    const [navbarLinks, setnavbarLinks ] = useState([]);
    const Menu = () => {
        return (  
            <ul className='flex items-center w-full justify-evenly text-white'>
                {navbarLinks.map((value, index) => {
                    return (
                        <li className='font-googleLight font-[500] tracking-[0.04em] hover:text-hover cursor-pointer listItem text-[1rem]' key={index}>{value.title}</li>    
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
    <nav className='bg-[#202020] overflow-x-scroll no-scrollbar w-full flex px-0.5 items-center py-[0.76rem]'>   
        <Menu />
    </nav>
  )
}

export default Navbar