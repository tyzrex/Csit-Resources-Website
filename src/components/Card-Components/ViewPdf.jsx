import {React,useState} from 'react'

const ViewPdf = ({source}) => {
  return (
    <div className='grid content-center justify-items-center'>  
    <div className='pt-10 pb-20' >
    <iframe src={source} allow="autoplay" className='view h-[480px] md:h-[600px] w-[320px] sm:w-[500px] md:w-[780px] lg:w-[950px]'></iframe>
    </div>
    </div>
  )
}
export default ViewPdf