import React from 'react'
import vimal from '../photo/vimal.jpg'
//import Typed from 'react-typed';
import pdf from '../photo/resume.pdf';

const Home = () => {
  return (
    <div name="home" className='w-screen h-screen bg-gradient-to-b from-black to-gray-800   '>

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full text-white md:flex-row'>
      <div>
        <h1 className='font-bold text-4xl px-6 mb-4'>I'm a Frontend Developer
        </h1>
        <p className='font-semibold text-xl items-center capitalize px-6'>i love to work on web application using technologies like</p>
       // <Typed className='font-semibold text-2xl  capitalize px-6 text-green-200' strings={['React.','Tailwind.','JavaScript.','Node.'] } typespeed={120} backspeed={140} loop  /> 
        

    <div className='flex-col flex items-center md:ml-4'>

    <a href={pdf} download={true}><button className='bg-gradient-to-r from-blue-300 to-blue-200 mt-8 px-4 py-2 rounded-lg text-black font-semibold cursor-pointer hover:scale-105 duration-300 capitalize   mb-14' >resume
        </button></a>

    </div>
    
    </div>
    <div>
      <img src={vimal} alt="my profile" className='md:mx-auto h-62 w-96 rounded-2xl '/>
    </div>
    </div>
    </div>
  )
}

export default Home
