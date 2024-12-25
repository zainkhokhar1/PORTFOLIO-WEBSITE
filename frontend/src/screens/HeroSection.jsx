
import React from 'react'
import { motion } from 'framer-motion';

const HeroSection = () => {

    const width = window.innerWidth;
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        className='overxflow-hidden'
        >
            <div className='pt-8'>
                <div className='w-full relative h-fit mt-24 flex flex-col md:flex-row justify-center md:pl-1 lg:-ml-8 lg:mt-20 xl:-ml-28 -ml-1 items-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='w-fit lg:ml-16 lg:-mt-6 mb-5 relative md:h-[255px] xl:min-w-[18rem] xl:min-h-[320px] md:min-w-[13rem] h-[290px] items-center flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1.02 }}
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.4, delay: 0.5, }}
                            src="../../public/Me.png" alt="programmerImg" className='w-52 md:w-60 xl:w-72 z-[500] hover:scale-125 ease-in-out cursor-pointer duration-700' />
                        <motion.div
                            initial={{ translateY: 10, translateX: [0, -10, -20, -20] }}
                            animate={{ translateY: width >= 768 ? -5 : -40, translateX: [0, width >= 768 ? -30 : -5, -10, 0] }}
                            // exit={{ translateY: 10, translateX: -10 }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, easings: 'easeInOut', repeatType: 'reverse' }}
                            className='absolute flex flex-col -top-16 md:-top-24 md:-right-28 -right-10'>
                            <span className='text-white text-sm relative text-center top-10 w-40 md:w-full md:text-nowrap left-4'>Hello I Am <span className='text-purple-600 text-base'>ZAIN UL ABIDEEN</span></span>
                            <img src="../../public/Arrow.png" alt="arrowImg" className='w-20 md:w-32' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.3, scale: 1.2, backgroundColor: 'purple' }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
                            className='absolute w-full  rounded-full inset-0 z-0 bg-gradient-to-r from-[#763CAC] stroke-[#000000] to-[#320F85] opacity-5'>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 2, x: 200 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='text-white text-xs mt-7 text-center md:-mt-8'>
                        <span className='md:text-lg lg:text-4xl'>A Developer who</span>
                        <div className='mt-2 md:text-2xl text-purple-600 text-xl'>
                            <div className='lg:inline-block lg:text-2xl'>loves to convert ideas into</div>
                            <span className='relative z-40 inline-block'>
                                <img className='absolute inset-0 z-0 min-w-28 md:min-w-36 lg:-mt-3 lg:ml-3' src="../../public/Ellipse 6.png" alt="circleImg" /><span className='pl-5 md:pl-8 lg:'>reality</span>
                            </span>
                        </div>
                        <div className='text-xs mt-8'>
                            Nothing is impossible, the word itself says 'I'm possible'!
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                    viewport={{ once: true }}
                    className='text-white text-center md:text-start md:pl-28 lg:pl-52 md:pr-5'>
                    <div className=' mt-5'>
                        <span className='text-xl text-purple-600 lg:text-4xl'>I'm a Software Developer.|</span>
                        <div className='text-xs mt-2 text-start pl-7 md:pl-0 lg:text-lg'>Currently working as a freelancer on many platforms.</div>
                    </div>
                    <div className='mt-16 mb-5 md:mt-5 text-sm px-5 md:pl-0 tracking-wide lg:text-lg'>
                        <span>A self-taught MERN stack developer, functioning in the industry for 3+ years now. I build robust and scalable web applications that create an equilibrium between user needs and business goals.</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeroSection;