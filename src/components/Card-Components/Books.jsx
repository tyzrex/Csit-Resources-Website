import { React, useState } from 'react'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import {AiOutlineFilePdf} from 'react-icons/ai'
import ViewPdf from './ViewPdf'
import {RiBookMarkLine} from 'react-icons/ri'


const Books = ({name,go}) => {
    return (
        <div>
            <div className="w-[340px] sm:w-[500px] flex flex-col justify-center items-center p-4">
                <div className="bg-black border border-gray-600 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="text-red-600"><RiBookMarkLine size={30}/></div>
                            <div className="text-lg font-bold">Books</div>
                        </div>
                        <div className="flex items-center space-x-4">
                        </div>
                    </div>
                    <div className='flex items-center justify-start mt-4'>
                        <div className='flex items-center'>
                        <div className='text-red-600 font-bold '><AiOutlineFilePdf size={26}/></div>
                        <a href={go}>
                        <div className="text-gray-500 font-bold text-sm pl-3 cursor-pointer">
                            {name} Books
                        </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Books