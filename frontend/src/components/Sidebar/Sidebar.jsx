import React, { useEffect, useState, useRef, memo } from "react";
import { christians, discover } from "../../assets";
import Button from "../Button/Button";
import { client } from "../../client";

const sidebar = memo(() => {
    const [sidebarLinks, setSideBarLinks ] = useState([]);
    const menuRef = useRef(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "sidebar"]{
                links
            }.links`)
            .then((data) => {
                setSideBarLinks(data[0])
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        const handleLinkClick = (event) => {
            const element = event.currentTarget;
            const childList= element.lastElementChild;
            if (childList) {
                childList.classList.toggle('hidden');
            }
        };

        const links = menuRef.current.querySelectorAll('.text-sidebarLinks');

            links.forEach((link) => {
                link.addEventListener('click', handleLinkClick);
            });

            return () => {
            // Cleanup event listeners when component unmounts
                links.forEach((link) => {
                    link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [sidebarLinks]);

    const onButtonClick = () => {

    }

    return (
        <aside className="bg-[#18191A] flex flex-col gap-[1.2rem] w-[15.4rem] h-auto py-[3rem] px-2.5">
            <div className="flex flex-col gap-[1.4rem]">
                <Button src={discover} alt='Discover Icon button' title='Discover' width='15' />
                <Button src={christians} alt="Discover Icon" title="Christian" width='11' />
            </div>
            <nav ref={menuRef} className="">
                <ul className="flex flex-col w-full h-auto gap-[0.874rem] px-[1.3rem] text-white">
                    {sidebarLinks.map((sidebarLink, index) => {
                        return (
                            <li key={index} className="font-google text-sidebarLinks hover:text-hover cursor-pointer">
                                {sidebarLink.title}
                                {sidebarLink.childLinks && <span className="ml-1.5">&gt;</span>}
                                {sidebarLink.childLinks && (
                                    <ul className="flex hidden flex-col w-full h-auto gap-3.5 px-2.5 py-2 text-white">
                                        {sidebarLink.childLinks.map((childLink, i) => {
                                            return (
                                                <li key={i + 'li'} className="font-google text-sidebarLinks hover:text-hover cursor-pointer">{childLink.title}</li>
                                            )
                                        })}
                                    </ul>
                                )}   
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    );
});

export default sidebar;

