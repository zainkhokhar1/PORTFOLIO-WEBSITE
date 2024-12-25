import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='mt-8 mb-10 text-white overflow-hidden'>
            <h2 className='text-center text-4xl font-extrabold text-gradient-clip text-gradient text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-300'>
                About MySelf
            </h2>
            <div className=''>
                <div className='max-h-96 sm:max-h-[23rem] lg:max-h-[30rem] lg:max-w-[33rem] sm:max-w-[26rem] sm:mx-auto min-h-72 overflow-hidden'>
                    <motion.img src="../../public/rb_2148089415.png" alt="img"
                        initial={{ rotateY: -180 }}
                        animate={{ rotateY: 20 }}
                        transition={{ duration: 4, repeatDelay: 3, repeat: Infinity, repeatType: "reverse" }}
                        className='cursor-pointer'
                    />
                </div>
                <div className='mt-8 px-4 md:px-20 lg:px-40 text-center'>
                    <motion.p
                        initial={{ x: -200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className='text-lg'>
                        Hello! I'm <span className='font-bold text-purple-600'>Zain Ul Abideen</span>, a passionate MERN stack developer with over 3 years of experience in building robust and scalable web applications. I specialize in creating meaningful and delightful digital products that balance user needs and business goals.
                    </motion.p>
                    <motion.p
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className='text-lg mt-4'>
                        My expertise includes working with MongoDB, Express.js, React.js, and Node.js to develop full-stack applications. I am dedicated to continuous learning and staying up-to-date with the latest industry trends and technologies.
                    </motion.p>
                    <motion.p
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className='text-lg mt-4'>
                        I am eager to help you achieve your goals by leveraging my skills and experience to deliver high-quality solutions. Let's work together to create something amazing!
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default About;