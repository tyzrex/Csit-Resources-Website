import React, { useState, Component } from 'react';
import { RiMenu4Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Header = () => {
    const [nav, setNav] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='bg-black'>
            <div className='text-white max-w-[1500px] bg-black flex justify-between items-center mx-auto px-4 h-16'>
                <h3 className='font-bold text-2xl w-full text-white-600'>Gyan<span className='text-red-600 text-bold'>Hub</span></h3>
                <div className=''>
                    <ul className='hidden md:flex cursor-pointer font-bold'>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/'>Home</Link></div>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/ds'>DSA</Link></div>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/ca'>CA</Link></div>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/cg'>CG</Link></div>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/nm'>NM</Link></div>
                        <div className='p-4 head mx-2 hover-underline-animation'><Link to='/stats'>STATS</Link></div>
                        
                    </ul>
                    <div onClick={handleNav} className='block md:hidden'>
                        {!nav ? <AiOutlineClose size={28} /> : <RiMenu4Line size={28} />}
                    </div>
                    <div className={!nav ? 'z-10 fixed top-0 left-0 w-[80%] border-r border-r-gray-600 h-full bg-black ease-in-out duration-500' : 'fixed left-[-100%] transition-opacity ease-in duration-500'}>
                        <h1 className='w-full text-3xl font-bold text-white m-8'>Gyan<span className='text-red-600 text-bold'>Hub</span></h1>
                        <ul className='uppercase p-4 text-white'>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/">Home</Link></div>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/ds">Data Structure and Algorithms</Link></div>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/ca">Computer Architecture</Link></div>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/cg">Computer Graphics</Link></div>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/nm">Numerical Method</Link></div>
                            <div className='p-4 border-b border-gray-700' onClick={handleNav}> < Link className='' to="/stats">Statistics-II</Link></div>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
