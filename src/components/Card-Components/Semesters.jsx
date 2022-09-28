import React from 'react'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import SubjectCards from '../Main-Components/SubjectCards';

const Semesters = ({ name }) => {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className='h-auto'>
            <div onClick={handleShow} className='bg-black border grid border-gray-500 h-[8vh] hover-underline-animation cursor-pointer'>
                <div className='flex justify-between mx-4 items-center text-2xl'>
                    <div>
                        {name}
                    </div>
                    {!show ? <AiOutlineArrowUp/> : <AiOutlineDown />}
                   
                </div>
                
            </div>
            <div className={!show ? ' block h-[auto] fadeIn ' : 'hidden fadeOut'}>
                <SubjectCards/>
            </div>
        </div>
    )
}

export default Semesters