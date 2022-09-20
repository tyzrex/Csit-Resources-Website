import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Contributors = ({FirstName,LastName,source}) => {
    return (
        <div className='border-t border-t-gray-600'>
            <h1 className='text-red-600 text-3xl font-bold bg-black text-center pt-8'>Contributors</h1>
            <section className=" bg-black flex font-medium items-center justify-center h-auto p-10">

                <section className="w-64 mx-auto bg-black border border-gray-600 rounded-2xl px-8 py-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">2d ago</span>
                        <span className="text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6 w-fit mx-auto">
                        <img src={source} className="rounded-full w-40 h-40 " alt="profile picture" srcset="" />
                    </div>

                    <div className="mt-8 ">
                        <h2 className="text-white font-bold text-2xl tracking-wide">{FirstName} <br /> {LastName}</h2>
                    </div>
                    <p className="text-red-600 font-semibold mt-2.5" >
                        Active
                    </p>

                    <div>
                        <div className='flex justify-between pt-4 text-white'>
                            <FaGithubSquare size={26}></FaGithubSquare>
                            <FaTwitterSquare size={26}></FaTwitterSquare>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default Contributors