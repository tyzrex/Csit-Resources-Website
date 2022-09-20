import React, { useState,setState} from 'react'
import dataArray from '../../../data/data'
import Cards from '../../Card-Components/MsCard'
import Notes from '../../Card-Components/Notes'
import OldQues from '../../Card-Components/OldQues'
import ViewPdf from '../../Card-Components/ViewPdf'
import Books from '../../Card-Components/Books'
import Labwork from '../../Card-Components/Labwork'


const CG = () => {
  const [pdf,setPdf] = useState([dataArray.CG[0]]);
  // const [qn, setQn] = useState()

  return (
    <div className='bg-black border-t border-t-gray-600 grid content-center justify-items-center '>
      <h2 data-aos='fade-down' data-aos-duration='700'   className='text-white text-2xl sm:text-3xl md:text-4xl p-6 font-bold'>Computer <span className='text-red-600'>Graphics</span></h2>
    <div data-aos='fade-down' data-aos-duration='700'   className='h-auto max-w-[1500px] bg-black grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center'>
      <Cards name='CG' value={dataArray.CG[0]} pdf ={pdf} setPdf ={setPdf}/>
      <a href={dataArray.CG[1]}><Notes name='CG'/></a>
      <OldQues name='CG' value={dataArray.CG[2]} pdf ={pdf} setPdf ={setPdf}/>
      <Books name='CG'go ="https://drive.google.com/file/d/1awxJVla-qea47cPW3QiktVEgx6j5_Kf4/preview"/>
      <Labwork name='CG' go={dataArray.CG[3]}/>
    </div>
    <ViewPdf data-aos='fade-down' data-aos-duration='500'  source={pdf}/>
    </div>
  )
}

export default CG;