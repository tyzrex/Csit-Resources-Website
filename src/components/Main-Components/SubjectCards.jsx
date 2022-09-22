import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import { Link } from 'react-router-dom'
import DSA from '../../assets/dsa.jpg'
import CA from '../../assets/CA.jpg'
import CG from '../../assets/graphics.jpg'
import Stats from '../../assets/stats.png'
import NM from '../../assets/maths.png'   
import MISC from '../../assets/MISC.jpg'

const SubjectCards = () => {
    AOS.init();
  return (
    <div className='w-full py-[4rem] px-4 grid text-white bg-black'>
            <div className='font-mono mb-20 grid content-center justify-items-center'><h1 className='text-4xl text-center text-white font-bold'>CSIT Third Semester <span className='text-red-600'>Resources</span></h1></div>
        <div className='max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link className="text-start"  to='/ds'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg' src={DSA} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Data Structures <br></br> And Algorithms</h2>
            </div></Link>
            <Link className="text-start"  to='/ca'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg'src={CA} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Computer <br /> Architecture</h2>
            </div></Link>
            <Link className="text-start"  to='/cg'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg' src={CG} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Computer <br /> Graphics</h2>
            </div></Link>
            <Link className="text-start"  to='/stats'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg' src = {Stats} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Statistics-II</h2>
            </div></Link>
            <Link className="text-start"  to='/nm'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg' src={NM} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Numerical Method</h2>
            </div></Link>
            <Link className="text-start"  to='/ds'>
            <div data-aos='fade-right' data-aos-duration = '1000' className='w-full shadow-sm shadow-gray-600 border-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[240px] mx-auto mt-[-3rem] bg-white rounded-lg' src={MISC} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Miscellaneous</h2>
            </div></Link>
        </div>
    </div>
  )
}

export default SubjectCards