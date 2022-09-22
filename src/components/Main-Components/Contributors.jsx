import React from 'react'
import MSP from "../../assets/msp.jpg";
import ContributorProfiles from './ContributorProfiles';


const Contributors = () => {
    return (
        <div className='border-t border-t-gray-600'>
            <h1 className='text-red-600 text-3xl font-bold bg-black text-center pt-8'>Contributors</h1>
            <div className='bg-black grid content-center justify-items-center'>
               <div className='max-w-[1500px] md:max-w-[700px] grid-flow-row md:flex md:justify-center'>
               <ContributorProfiles FirstName={"Mr. Safal"} LastName={"Piya"} source={MSP}/>
                <ContributorProfiles FirstName={"Mr. Safal"} LastName={"Piya"} source={MSP}/>
                <ContributorProfiles FirstName={"Mr. Safal"} LastName={"Piya"} source={MSP}/>
               </div>
            </div>
        </div>
    )
}

export default Contributors