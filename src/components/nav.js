import React from 'react'
import { useState } from 'react';
import { FaBars , FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Nav = () => {
    const [navbar ,setNav] = useState(false);

    const lists=['Home','about','project','contact'];
  return (
    
    <div className='w-screen h-20 bg-black flex justify-between items-center'>
        <div >
            <h1 className=' text-4xl font-serif ml-5 text-white capitalize'>portfolio</h1>
        </div>   
        <nav>
            <ul className='hidden md:flex '>
            {lists.map((list) => (<li className='font-medium text-2xl px-3 cursor-pointer capitalize hover:scale-105 duration-300
             text-white mr-5'><Link to={list} smooth duration={500}>{list}</Link></li>))}
            </ul>
            </nav>
            <div onClick={() => setNav(!navbar)} className='cursor-pointer text-white hover:scale-105 duration-300 text-3xl mr-5 mb-2 md:hidden'>

            {navbar ? <FaTimes /> :<FaBars/>} 
        
            </div>
     
            {navbar && (<ul  className=' flex flex-col justify-center  items-center absolute top-20 left-0 w-screen h-screen bg-black text-white'>
            {lists.map((list) => (<li className=' px-4 cursor-pointer capitalize py-6 text-2xl font-medium  hover:scale-105 duration-300'><Link to={list} smooth duration={500}>{list}</Link></li>))}
            
            </ul>) }  
    </div>
  )
}

export default Nav