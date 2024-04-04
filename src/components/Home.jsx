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
                <p className='text-gray-400 py-4 max-w-[700px]'>
                    With expertise in HTML, CSS, JavaScript, and React, I aspire to be a Frontend Developer and am excited to apply my abilities to create dynamic user interfaces.
                    I am dedicated to brinsging fresh perspectives and working in a dynamic team atmosphere.
                    I have a strong eye for design and a love for crafting flawless user experiences.
                    I'm looking for a full-time position in a progressive company where I can use my skills to help the team succeed going forward.
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
