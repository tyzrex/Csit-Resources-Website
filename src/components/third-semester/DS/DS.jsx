import React, { useState,setState} from 'react'
import dataArray from '../../../data/data'
import Cards from '../../Card-Components/MsCard'
import Notes from '../../Card-Components/Notes'
import OldQues from '../../Card-Components/OldQues'
import ViewPdf from '../../Card-Components/ViewPdf'
import Books from '../../Card-Components/Books'
import Labwork from '../../Card-Components/Labwork'
import Midterm from '../../Card-Components/Midterm'


const DS = () => {
  const [pdf,setPdf] = useState([dataArray.DSA[0]]);
  // const [qn, setQn] = useState()

  return (
    <div className='bg-black border-t border-t-gray-600 grid content-center justify-items-center '>
      <h2 data-aos='fade-down' data-aos-duration='700'   className='text-white text-2xl sm:text-3xl md:text-4xl p-6 font-bold'>Data Structures <span className='text-red-600'>And</span> Algorithms</h2>
    <div data-aos='fade-down' data-aos-duration='700'   className='h-auto max-w-[1500px] bg-black grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center'>
      <Cards name='DSA' value={dataArray.DSA[0]} pdf ={pdf} setPdf ={setPdf}/>
      <Notes name='DSA' value={dataArray.DSA[1]} pdf ={pdf} setPdf ={setPdf}/>
      <OldQues name='DSA'/>
      <Books name='DSA'go ="https://drive.google.com/file/d/1hMZ-ZsKpKVZ_90LbJV_pPa4cs45uNyFh/preview"/>
      <Labwork name='DSA' go={dataArray.DSA[2]}/>
      <Midterm name='DSA' go={dataArray.DSA[3]}/>
    </div>
    <ViewPdf data-aos='fade-down' data-aos-duration='500'  source={pdf}/>
    </div>
  )
}

export default DS;