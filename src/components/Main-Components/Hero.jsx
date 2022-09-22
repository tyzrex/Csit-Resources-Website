import React from 'react'
import Typed from 'react-typed';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    AOS.init();
  return (
    <div className=' text-white bg-black border-t border-t-gray-600 nav mt-[-65px]'>
        <div className='max-w-[420px] sm:max-w-[700px] md:max-w-full mt-[0px] w-full h-[70vh] mx-auto text-center lg:flex lg:justify-around lg:items-center md:grid grid gap-0 content-center justify-items-center md:justify-items-center md:content-center sm:content-center sm:justify-items-center'>
            <div>
            <h1 data-aos='zoom-in' className=' md:text-5xl sm:text-5xl text-4xl font-bold md:py-6 md:max-w-xl'>Helping <span className='text-red-600'>others</span> is like helping <p className='text-red-600'>yourself</p></h1>
            </div>

            <div>
                <div className='flex  justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 text-white'>We provide: </p>
                    <Typed className ='ml-2 md:text-[2rem] sm:text-3xl text-xl text-red-600 font-bold'strings={['Notes','Old Questions','Books']}
                        typeSpeed={120} backSpeed={140} loop
                    />
                </div>
                <p className=' text-md md:text-lg font-bold md:max-w-lg text-white md:pl-4 pl-2'>
                    Your Contribution can be valualble for others. So, please share your notes, old questions, books, etc. with us.
                </p>
                <button className='bg-red-600 animate-[bounceIn_1s_ease-in-out] hover:bg-white duration-200 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white hover:text-red-600 '>Contribute</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
