import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className=' w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-white'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#38BDCB]'>Ankit Nepal</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Front-end Developer.</h2>
                <p className='text-gray-400 py-4 max-w-[700px]'>Frontend Developer with proven skills in HTML, CSS, JavaScript and React. A fresher who is seeking a full time position
                    in a reputable organization, in which the personal abilities I posses, can assist with the implementation of innovative
                    ideas, creativity, and skills for this developed firm.
                </p>
                <div>
                    <button className='group  text-white border-2 px-2 rounded-md py-3 my-2 flex items-center hover:bg-[#38BDCB] hover:border-[#38BDCB] '>
                        <Link to="work" smooth={true} duration={500} >
                            View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
