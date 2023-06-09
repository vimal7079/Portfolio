import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div name ="contact" className='w-screen h-screen bg-gradient-to-b from-gray-800 to-black '>
      <div>
        <p className=' font-bold ml-10 text-4xl mb-4 text-white'>Contact</p>
        <p className='text-white capitalize ml-20 mb-16'>for contact fill th form</p>
      </div>
      <div className='flex justify-center items-center'>
        <form>
          <input type='text' name="name" placeholder='Enter your name' 
          className='p-2 bg-transparent border-2 rounded-md text-white flex mb-3'/>
          <input type='text' name="email" placeholder='Enter your Email' 
          className='p-2 bg-transparent border-2 rounded-md text-white flex mb-3'/>
          <textarea name="message"rows='4' className='p-2 bg-transparent border-2 rounded-md text-white ml-2 '/>
        </form>
        <br></br>
        
      </div>
      <div className='flex justify-center cursor-pointer  hover:scale-105 duration-200 mt-6 text-3xl text-white'>
        <a href='www.linkedin.com/in/
vimal-k-424ab7252'><AiFillLinkedin className='mr-4 '/></a>
<a href='https://github.com/vimal7079?tab=stars'><AiFillGithub className='mr-4'/></a>
<a href='https://mail.google.com/'><AiFillMail/></a>
  
        </div>
    </div>
  )
}

export default Contact