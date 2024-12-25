
import React from 'react'
import { motion } from 'framer-motion'

const ExampleProject = () => {
    return (
        <motion.div className='text-white relative mb-8 overflow-hidden'
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
    
        >
            <h2 className='text-center text-2xl font-bold pt-10'>
                SERVICES PROVIDED
            </h2>
            <div className='flex flex-wrap items-center justify-center'>
                <div
                    className='flex items-center justify-center flex-col mt-10 text-center max-w-96 cursor-pointer hover:scale-105 hover:shadow-purple-950 hover:rounded-full hover:px-5 hover:shadow-md hover:pb-4 duration-300'>
                    <img src="../../public/4758689.jpg" className='w-28 rounded-full' alt="webDevImg" />
                    <h3 className='text-center text-lg font-bold my-3'>
                        Web Development
                    </h3>
                    <p className=''>
                        Enhance your business with a website. We provide web development services to help you grow your business.
                    </p>
                    <div className='flex items-center flex-col justify-center mt-3'>
                        <p className='text-xs text-pink-700'>Wants to get a website?</p>
                        <button className='bg-pink-600 hover:bg-pink-700 duration-200 mt-2 px-3 py-1 rounded-full'>Contact Us</button>
                    </div>
                </div>
                {/* 2nd */}
                <div className='flex items-center justify-center flex-col mt-12 text-center max-w-96 hover:scale-105 hover:shadow-purple-950 hover:rounded-full hover:px-5 hover:shadow-md hover:pb-4 duration-300 cursor-pointer'>
                    <img src="../../public/backendDev.avif" className='w-28 rounded-full' alt="webDevImg" />
                    <h3 className='text-center text-lg font-bold my-3'>
                        Frontend Development
                    </h3>
                    <p className='px-3'>
                        Websites without frontend are like a car without a body. We provide frontend development services to help you grow your business.
                    </p>
                    <div className='flex items-center flex-col justify-center mt-3'>
                        <p className='text-xs text-pink-700'>Wants to get scalable Backend?</p>
                        <button className='bg-pink-600 hover:bg-pink-700 duration-200 mt-2 px-3 py-1 rounded-full'>Contact Us</button>
                    </div>
                </div>
                {/* 3rd  */}
                <div className='flex items-center justify-center flex-col mt-12 text-center max-w-96 hover:scale-105 hover:shadow-purple-950 hover:rounded-full hover:px-5 hover:shadow-md hover:pb-4 duration-300 cursor-pointer'>
                    <img src="../../public/FrontendDev.avif" className='w-28 rounded-full' alt="webDevImg" />
                    <h3 className='text-center text-lg font-bold my-3'>
                        Backend Development
                    </h3>
                    <p className='px-3'>
                        Websites without backend are like a car without an engine. We provide backend development services to help you grow your business.
                    </p>
                    <div className='flex items-center flex-col justify-center mt-3'>
                        <p className='text-xs text-pink-700'>Wants to get Awsome Animated Frontend?</p>
                        <button className='bg-pink-600 hover:bg-pink-700 duration-200 mt-2 px-3 py-1 rounded-full'>Contact Us</button>
                    </div>
                </div>
                {/* 4th */}
                <div className='flex items-center justify-center flex-col mt-12 text-center max-w-96 hover:scale-105 hover:shadow-purple-950 hover:rounded-full hover:px-5 hover:shadow-md hover:pb-4 duration-300 cursor-pointer'>
                    <img src="../../public/bugFixing.jpg" className='w-28 rounded-full' alt="webDevImg" />
                    <h3 className='text-center text-lg font-bold my-3'>
                        Bug Fixing
                    </h3>
                    <p className='px-3'>
                        Bugs are common in websites. We provide bug fixing services to help you grow your business.
                    </p>
                    <div className='flex items-center flex-col justify-center mt-3'>
                        <p className='text-xs text-pink-700'>Wants to develop Bugs free website?</p>
                        <button className='bg-pink-600 hover:bg-pink-700 duration-200 mt-2 px-3 py-1 rounded-full'>Contact Us</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExampleProject;