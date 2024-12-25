
import React from 'react'
import { motion } from 'framer-motion';
const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='overflow-hidden'
        >
            <div className='text-white text-center py-10'>
                <h3 className='text-2xl font-bold'>
                    Skills
                </h3>
                <p className='text-sm mt-5 mb-2 px-2 md:px-10'>
                    I am a MERN stack full stack developer, passionate about building scalable web applications and eager to help you achieve your goals.
                </p>
            </div>
            <div className='px-1 lg:mx-36 md:px-10  overflow-hidden h-fit'>
                <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1.03 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                src="../../public/Group 1910.png" alt="skillsImg" className='mx-auto h-full w-full object-cover' />
            </div>

        </motion.div>
    )
}

export default Skills;