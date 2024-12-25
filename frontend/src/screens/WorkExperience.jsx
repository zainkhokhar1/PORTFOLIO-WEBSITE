
import React from 'react'
import { motion } from 'framer-motion';

const WorkExperience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='overflow-hidden'
       >
            <div className='bg-[#11071F] text-white my-20'>
                <h2 className='text-2xl text-center'>
                    Work Experience
                </h2>
                <div className='w-full flex flex-wrap items-center justify-center mx-auto h-[35rem] min-h-fit mt-8 relative'>
                    <div className='w-[20rem] mx-auto h-auto absolute rounded-full inset-0 z-0 bg-gradient-to-b from-[#ab69e9] from-10% via-5% via-[#7342b8] to-30% to-[#653b8f] opacity-10'>
                    </div>
                    {/* cards now showing here */}
                    <div className='flex flex-wrap justify-center relative cursor-pointer'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 1px 2px #8a47e7' }}
                            className='w-[18rem] min-h-[21rem] border border-indigo-900 hover:scale-110 duration-500 ease-in-out hover:shadow-sm hover:shadow-purple-700 cursor-pointer h-fit  bg-gradient-to-t from-[#24123d] from-10% via-60% via-[#7444b6] to-80% to-[#8345bd] rounded-2xl shadow-lg p-5 pb-8 m-5'>
                            <div className='text-center gap-3 flex flex-col items-center'>
                                <img src="../../public/Group 2.png" alt="starImg" />
                                <h2 className='text-xl'>ZK Collection</h2>
                                <p className='text-xs'>A comprehensive MERN stack project showcasing a collection of digital assets with advanced filtering and search capabilities.</p>
                                <motion.button
                                    whileHover={{ scale: 1, boxShadow: '0px 0px 1px 1px #8a47e7' }}
                                    transition={{ duration: 0.5 }}
                                    className='text-xs mt-4 bg-[#2C1250] rounded-md px-4 py-2 border border-[#43197e]'>Visit Site</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    {/* 2nd card */}
                    <div className='flex justify-center relative cursor-pointer'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 1px 2px #8a47e7' }}
                            className='w-[18rem] min-h-[21rem] border border-indigo-900 hover:scale-105 duration-500 ease-in-out hover:shadow-sm hover:shadow-purple-700 cursor-pointer h-fit  bg-gradient-to-t from-[#24123d] from-10% via-60% via-[#7444b6] to-80% to-[#8345bd] rounded-2xl shadow-lg p-5 pb-8 m-5'>
                            <div className='text-center gap-3 flex flex-col items-center'>
                                <img src="../../public/Group 1935.png" alt="starImg" />
                                <h2 className='text-xl'>Twitter Clone</h2>
                                <p className='text-xs'>A full-featured Twitter clone built with the MERN stack, including real-time updates, user authentication, and social interactions with create likes,posting and other functionalities.</p>
                                <motion.button
                                    whileHover={{ scale: 1, boxShadow: '0px 0px 1px 1px #8a47e7' }}
                                    transition={{ duration: 0.5 }}
                                    className='text-xs mt-4 bg-[#2C1250] rounded-md px-4 py-2 border border-[#43197e]'>Visit Site</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    {/* 3rd card */}
                    <div className='flex justify-center relative cursor-pointer'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 1px 2px #8a47e7' }}
                            className='w-[18rem] min-h-[21rem] border border-indigo-900 hover:scale-110 duration-500 ease-in-out hover:shadow-sm hover:shadow-purple-700 cursor-pointer h-fit  bg-gradient-to-t from-[#24123d] from-10% via-60% via-[#7444b6] to-80% to-[#8345bd] rounded-2xl shadow-lg p-5 pb-8 m-5'>
                            <div className='text-center gap-3 flex flex-col items-center'>
                                <img src="../../public/Group 1938.png" alt="starImg" />
                                <h2 className='text-xl'>HDX Ecommerce</h2>
                                <p className='text-xs'>An e-commerce platform developed using the MERN stack, featuring product listings, shopping cart, and secure payment integration..</p>
                                <motion.button
                                    whileHover={{ scale: 1, boxShadow: '0px 0px 1px 1px #8a47e7' }}
                                    transition={{ duration: 0.5 }}
                                    className='text-xs mt-4 bg-[#2C1250] rounded-md px-4 py-2 border border-[#43197e]'>Visit Site</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    {/* 4th card */}
                    <div className='flex justify-center relative cursor-pointer'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 1px 2px #8a47e7' }}
                            className='w-[18rem] min-h-[21rem] border border-indigo-900 hover:scale-110 duration-500 ease-in-out hover:shadow-sm hover:shadow-purple-700 cursor-pointer h-fit  bg-gradient-to-t from-[#24123d] from-10% via-60% via-[#7444b6] to-80% to-[#8345bd] rounded-2xl shadow-lg p-5 pb-8 m-5'>
                            <div className='text-center gap-3 flex flex-col items-center'>
                                <img src="../../public/Icons.png" alt="starImg" />
                                <h2 className='text-xl'>Bookstore Website</h2>
                                <p className='text-xs'>A bookstore website where users can browse books, view prices, and purchase books. Features include categories for paid and free books, and a search functionality.</p>
                                <motion.button
                                    whileHover={{ scale: 1, boxShadow: '0px 0px 1px 1px #8a47e7' }}
                                    transition={{ duration: 0.5 }}
                                    className='text-xs mt-4 bg-[#2C1250] rounded-md px-4 py-2 border border-[#43197e]'>Visit Site</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    {/* 5th card here  */}
                    <div className='flex justify-center relative cursor-pointer'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 1px 2px #8a47e7' }}
                            className='w-[18rem] min-h-[21rem] border border-indigo-900 hover:scale-110 duration-500 ease-in-out hover:shadow-sm hover:shadow-purple-700 cursor-pointer h-fit  bg-gradient-to-t from-[#24123d] from-10% via-60% via-[#7444b6] to-80% to-[#8345bd] rounded-2xl shadow-lg p-5 pb-8 m-5'>
                            <div className='text-center gap-3 flex flex-col items-center'>
                                <img src="../../public/Icons.png" alt="starImg" />
                                <h2 className='text-xl'>Wanderlust Website</h2>
                                <p className='text-xs'>A travel listing website where users can create listings of places with prices, reviews, and includes authorization and authentication.</p>
                                <motion.button
                                    whileHover={{ scale: 1, boxShadow: '0px 0px 1px 1px #8a47e7' }}
                                    transition={{ duration: 0.5 }}
                                    className='text-xs mt-4 bg-[#2C1250] rounded-md px-4 py-2 border border-[#43197e]'>Visit Site</motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default WorkExperience