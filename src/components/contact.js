import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div name ="contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black '>
      <div className=''>
        <p className=' font-semibold ml-12 text-[50px]  text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-slate-50 font-sans top-5'>Contact</p>
        <p className='text-white capitalize ml-16 text-[18px] mt-4 mb-16'>tell me about your experience and subscribe to my news letter</p>
      </div>
      <div className='flex justify-center items-center'>
      <form action="" className='flex flex-col md:mb-0 mb-12'>
      <h1 className='text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-slate-50'>Thank You!</h1>
      <label htmlFor="text" className='py-2 mt-[30px]'>User Name</label>
      <input
        type="text"
        placeholder='User Name'
        className='w-full md:w-[340px] h-[40px] bg-transparent border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'
      />
      <label htmlFor="Password" className='py-2'>Experience</label>
      <input
        type="Password"
        placeholder='User Experience'
        className='w-full md:w-[340px] h-[40px] bg-transparent border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'
      />
      <label htmlFor="" className='cursor-pointer py-4'>News Letter</label>
      <button className='w-full md:w-[340px] h-[40px] bg-gradient-to-r from-slate-50 to-green-500 rounded-md hover:scale-105 duration-300'>Subscribe</button>
    </form>
        <br></br>
        
      </div>
      <div className='flex justify-center  mt-6 text-3xl text-white'>
        <a href='www.linkedin.com/in/
vimal-k-424ab7252'><AiFillLinkedin className='mr-4 cursor-pointer  hover:scale-105 duration-200 hover:text-green-200 '/></a>
<a href='https://github.com/vimal7079?tab=stars'><AiFillGithub className='mr-4 cursor-pointer  hover:scale-105 duration-200 hover:text-green-200'/></a>
<a href='https://mail.google.com/'><AiFillMail className='cursor-pointer  hover:scale-105 duration-200 hover:text-green-200'/></a>
  
        </div>
    </div>
  )
}

export default Contact
