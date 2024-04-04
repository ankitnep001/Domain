import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import resume from '../assets/AnkitNepalResume.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    const handleDownloadResume = () => {
        try {
            const downloadLink = document.createElement('a');
            downloadLink.href = resume;
            downloadLink.download = 'ResumeAnkitNepal.pdf'; // Set the filename here

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error('Error downloading resume:', error);
        }
    };
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400' >
            <div className='text-[#38BDCB] font-bold  ' >
                <p className=' border-solid border-white border-b-2 gap-4'><span className='text-3xl'>A</span>nkit</p>
            </div>


            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile-menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>

            </ul>

            {/* Social-icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-gray-400' href="https://www.linkedin.com/in/ankit-nepal-32791b256/" target='_blank'>Linkedin<FaLinkedin size={25} /></a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-400' href="https://github.com/ankitnep001" target='_blank'>Github<FaGithub size={25} /></a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-200'>
                        <a className='flex justify-between items-center w-full text-gray-400' href="mailto:your.ankit001nep@gmail.com" target='_blank'>Email<HiOutlineMail size={25} /></a>
                    </li>

                    <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-200'
                        onClick={handleDownloadResume}>
                        <a className='flex justify-between items-center w-full text-gray-400' href="/">Resume<BsFillPersonLinesFill size={25} /></a>
                    </li>

                </ul>
            </div>
        </div >
    )
}

export default Navbar
