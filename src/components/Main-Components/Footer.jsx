import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  AOS.init();
  return (
    <div className='bg-black border border-l-0 border-r-0 border-t-gray-600'>
<div className='max-w-[420px] sm:max-w-[600px] md:max-w-[1500px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-white'>
      <div >
        <h1 data-aos='zoom-in' data-aos-duration='1000' className='w-full text-3xl text-center lg:text-left font-bold text-white'>GYAN<span className='text-red-600'>HUB</span></h1>
        <p  data-aos='zoom-in' data-aos-duration='1000' className='py-4 text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div data-aos='zoom-in' data-aos-duration='1000' className='grid gap-8 grid-flow-col content-center justify-items-center md:w-full my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='grid gap-8 grid-flow-col content-center justify-items-center md:w-full lg:flex lg:col-span-2 lg:justify-between mt-6'>
    <div  data-aos='fade-right' data-aos-duration='1000'>
        <h6 className='font-bold text-red-600 animate-[bounceIn_1s_ease-in-out]'>Order</h6>
        <ul>
            <li className='py-2 text-sm'>Delivery</li>
            <li className='py-2 text-sm'>Pickup</li>
            <li className='py-2 text-sm'>Stations</li>
            <li className='py-2 text-sm'>Web Order</li>
        </ul>
    </div>
    <div data-aos='fade-right' data-aos-duration='1000'>
        <h6 className='font-bold text-red-600'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Recipes</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Training</li>
        </ul>
    </div>
    <div data-aos='fade-right' data-aos-duration='1000'>
        <h6 className='font-bold text-red-600'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div data-aos='fade-right' data-aos-duration='1000'>
        <h6 className='font-bold text-red-600'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;