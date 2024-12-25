
import React from 'react'
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { toast, Bounce } from 'react-toastify';

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    reset();

    toast('Message Sent Successfully !', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className='overflow-hidden text-white mt-14 mb-5'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Contact MySelf</h1>
        <div className='flex flex-col md:flex-row justify-center md:items-start space-y-5 md:space-x-5 md:space-y-0 mt-5'>
          <div className='w-40 sm:w-52 md:w-64 xl:w-80 mx-auto my-7'>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, repeatType: 'reverse', repeat: Infinity }}

              className='' src="../../public/fun-3d-cartoon-illustration-indian-businessman.png" alt="ContactUsImage" />
          </div>
          {/* FORM HERE */}
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col items-center px-7 md:pl-0 space-y-5 sm:px-20 text-black w-full md:mt-10'>
              <input type="email" className='focus:outline-purple-600 focus:outline-dashed focus:outline-2 lg:w-96 xl:w-[40rem] xl:h-14 h-12 w-full px-2' placeholder='Enter Your Email' {...register("email", { required: true, minLength: 4 })} />
              {errors.email && <span className='text-sm text-red-600'>Email is required</span>}

              <textarea name="messge" id="message" cols="30" rows="10" placeholder='Enter Your Message' className='p-2 focus:outline-purple-600 focus:outline-dashed focus:outline-2 w-full ' {...register("message", { required: true, minLength: 5 })}></textarea>
              {errors.message && <span className='text-sm text-red-600'>Messge is required</span>}

              <button className='bg-purple-600 w-1/2 xl:w-40 h-12 rounded-md text-white border-purple-400 border focus:border-2 focus:border-purple-200 hover:bg-purple-700 duration-300'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;