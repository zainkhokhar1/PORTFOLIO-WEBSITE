
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='overflow-hidden text-white border border-t-purple-950 h-16 rounded-t-xl border-transparent shadow-xl shadow-purple-100'>
            <div className='flex items-center justify-around px-8 text-white text-2xl h-full'>
                <FaFacebook onClick={() => { window.location = "https://www.facebook.com/zainyt.zaxi?mibextid=ZbWKwL" }} className='hover:text-purple-800 cursor-pointer duration-300' />

                <FaLinkedin onClick={() => { window.location = "https://www.linkedin.com/in/muhammad-zain-ul-abideen-440033333/" }} className='hover:text-purple-800 cursor-pointer duration-300' />

                <FaInstagram className='hover:text-purple-800 cursor-pointer duration-300' />
                <FaGithub className='hover:text-purple-800 cursor-pointer duration-300' onClick={() => window.Location = "https://github.com/zainkhokhar1"} />
            </div>
        </div>
    )
}

export default Footer;