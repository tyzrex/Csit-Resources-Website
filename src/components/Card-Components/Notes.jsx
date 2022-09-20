import { React } from 'react'
import {AiOutlineFilePdf} from 'react-icons/ai'
import { GiNotebook } from 'react-icons/gi'

const Notes = ({name,pdf,setPdf,value}) => {
    const handleState = (x) => {
        setPdf(x);
    }
    return (
        <div>
            <div className="w-[340px] sm:w-[500px] flex flex-col justify-center items-center p-4">
                <div className="bg-black border border-gray-600 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="text-red-600"><GiNotebook size={30}/></div>
                            <div className="text-lg font-bold">Notes</div>
                        </div>
                        <div className="flex items-center space-x-4">
                        </div>
                    </div>
                    <div className='flex items-center justify-start mt-4'>
                        <div className='flex items-center'>
                        <div className='text-red-600 font-bold '><AiOutlineFilePdf size={26}/></div>
                        <div className="text-gray-500 font-bold text-sm pl-3 cursor-pointer" onClick={()=>{handleState(value)}}>
                            {name} Notes
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='h-auto bg-white w-[40vh] rounded-sm'>
            <div className='flex justify-start items-center mx-10 pt-4'>
                <BsFillJournalBookmarkFill size={25}></BsFillJournalBookmarkFill>
                <h3 className='mx-6 text-xl'>Syllabus</h3>
            </div>
            <div>
                <div className='grid grid-flow-col mt-6 pb-4'>
                    <div className='flex justify-start mx-10 items-center'>
                        <GrDocumentPdf size={25} color={'red'}></GrDocumentPdf>
                        <h3 className='mx-6 cursor-pointer' onClick={() => {setPdf(value.value)}}  >{`${name.name}`} Micro Syllabus</h3>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
    );
}


export default Notes