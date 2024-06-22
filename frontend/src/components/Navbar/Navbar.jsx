import React, { useEffect, useState} from 'react';
import { client } from '../../client';

const Navbar = () => {
    const [navbarLinks, setnavbarLinks ] = useState([]);
    const Menu = () => {
        return (  
            <ul className='flex items-center w-full justify-between gap-14 text-white'>
                {navbarLinks.map((value, index) => {
                    return (
                        <li className='font-googleLight font-[500] tracking-normal listItem text-[0.05em]' key={index}>{value.title}</li>    
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
    <nav className='bg-[#202020] w-full flex items-center pl-20 pr-[5.25rem] py-2.5'>   
        <Menu />
    </nav>
  )
}

export default Navbar