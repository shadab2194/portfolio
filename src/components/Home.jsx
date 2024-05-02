import React from 'react'
import p1 from '../assets/p1.png'
import { SlArrowRight } from "react-icons/sl";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full justify-center px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Front-end developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>To use technical knowledge, wit and wisdom to the fullest in a right way for organizational and personal growth.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-300 cursor-pointer '>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-500'>
                        <SlArrowRight size={15} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={p1} alt="my pic" className='rounded-xl mx-auto w-2/3 md:w-4/6'/>
            </div>
        </div>
    </div>
  )
}

export default Home
