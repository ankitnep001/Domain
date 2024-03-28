import React from 'react'
import Ghumdim from '../assets/ghumdim.png'
import { data } from "../data/data"
const Work = () => {

    const portfolio = data;
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#38BDCB]'>Works</p>
                    <p className='py-4'>Check out some of my recent works</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-col-2 md:grid-cols-1 gap-4'>

                    {/* Grid Item */}

                    {portfolio.map((item, index) => (
                        <div key={index} style={{ backgroundImage: `url(${item.image})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects for image */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-black tracking-wider '>
                                    {item.name}
                                </span>
                                <div className='pt-8 text-center'>
                                    {/* <a href="">
                                        <button
                                            className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a> */}
                                    <a href={item.github} target='blank'>
                                        <button
                                            className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>

                            </div>

                        </div>

                    ))}


                </div>







            </div>


        </div>



    )
}

export default Work
