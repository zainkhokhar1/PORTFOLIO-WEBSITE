
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './screens/HeroSection';
import WorkExperience from './screens/WorkExperience';
import Skills from './screens/Skills';
import Services from './screens/Services.jsx';
import About from './screens/About.jsx';
import { IoIosArrowUp } from "react-icons/io";
import Contact from './screens/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [isHover, setIsHover] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='bg-[#11071F] overflow-x-hidden h-fit relative selection:text-white selection:bg-purple-950'>
      <Navbar />
      <HeroSection />
      <WorkExperience />
      <Skills />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />


      {/* Back to Top Button */}
      <div onClick={() => scrollTo()} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='fixed opacity-40 hover:opacity-100 duration-200 bottom-10 z-[999] md:right-10 right-2 sm:right-8 text-white bg-purple-800 flex items-center justify-center py-4 px-4 rounded-full cursor-pointer hover:bg-purple-900'>
        <IoIosArrowUp />
        {
          isHover && <div className={`top-1  -left-20 absolute opacity-50 w-20 flex items-center justify-center h-fit py-2 `} >
            <p className='text-white text-xs text-center'>Back to Top</p>
          </div>
        }
      </div>
    </div>
  )
}

export default App
