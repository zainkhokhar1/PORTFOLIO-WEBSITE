

import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSliderContext } from './ContextApi';
import SliderMenu from './SliderMenu';

const Navbar = () => {
    const [open, setOpen] = useSliderContext();
    const [scroll, setScroll] = useState(0);
    useEffect(() => {

        const handleScroll = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY]);

    useEffect(() => {
        scrollToSection(0);
    }, [])

    const scrollToSection = (scroll) => {
        window.scrollTo({ top: scroll, behavior: "smooth" })
    }
    
    return (
        <div className='overflow-x-hidden'>   

            <nav className="bg-[#1A0B2E] w-full h-20 md:h-[113px] text-white flex items-center justify-between px-9">
                <img src="../../public/Logo.png" alt="logoImg" className='w-6 cursor-pointer' />
                <RxHamburgerMenu className='text-3xl lg:hidden cursor-pointer' onClick={() => { setOpen(!open); localStorage.setItem('open', true) }} />
                <div className='hidden lg:flex space-x-10 list-none'>
                    <li className='hover:cursor-pointer hover:text-pink-400 duration-300' onClick={() => scrollToSection(0)}> Home </li>
                    <li className='hover:cursor-pointer hover:text-pink-400 duration-300' onClick={() => scrollToSection(3130)}> About </li>
                    <li className='hover:cursor-pointer hover:text-pink-400 duration-300' onClick={() => scrollToSection(744)}> Projects </li>
                    <li className='hover:cursor-pointer hover:text-pink-400 duration-300' onClick={() => scrollToSection(9390)}> Contact </li>
                    <li className='hover:cursor-pointer hover:text-pink-400 duration-300' onClick={() => scrollToSection(2320)}> Services </li>
                </div>
            </nav>
            <SliderMenu />
        </div>
    )
}

export default Navbar