
import React, { useEffect, useState } from 'react'
import { useSliderContext } from './ContextApi';
import { IoCloseOutline } from "react-icons/io5";

const SliderMenu = () => {

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

    const scrollToSection = (scroll) => {
        window.scrollTo({ top: scroll, behavior: "smooth" });
        localStorage.removeItem('open'); setOpen(false);
    }

    return (
        <div className={`h-screen w-11/12 md:w-8/12 bg-[#1A0B2E] fixed top-0 right-0 z-[999] transform transition-transform duration-500 text-white ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex flex-col mt-20 list-none ml-4 h-full pl-4 space-y-10'>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(0)}> Home </li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(3130)}> About </li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(744)}> Projects </li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(9390)}> Contact </li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(2320)}> Services </li>
            </div>

            {/* Close button to close the slider menu */}
            <IoCloseOutline onClick={() => { localStorage.removeItem('open'); setOpen(false) }} className='absolute top-2 left-2  text-white text-4xl cursor-pointer' />
        </div>
    )
}

export default SliderMenu