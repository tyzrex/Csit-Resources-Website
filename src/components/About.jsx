import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Chiya from '../assets/book.jpg'

const About = () => {
    AOS.init();
  return (
    <div className='border-t border-b border-gray-800 w-full bg-black text-white pt-12 pb-20 grid content-center justify-items-center text-center'>
            <div className='font-mono mb-10'><h1 className='text-4xl text-white font-bold'>About <span className='text-red-600'>Us</span></h1></div>

        <div className='max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center'>
            <img src={Chiya} alt="/" className='w-[500px] md:w-[650px] mx-6 rounded-lg'/>
            <div className='grid grid-cols-1 max-w-[400px] md:max-w-[600px] lg:max-w-none items-center justify-center mt-5'>
                <h1 data-aos='fade-right' data-aos-duration='1000' className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A Project For Learning.</h1>
                <p className='' data-aos='fade-right' data-aos-duration='1000'>This is a sample collaborative project made by me and my friend, he absolutely hates customizing so I created the front end for this website and we plan to continue updating this website in the coming days which the resources that we collect.</p>
                <div className='grid content-center justify-items-center'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About