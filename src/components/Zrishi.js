import React from 'react';
import rishivid from '../images/rishivid.gif'

 
function RishiC() {
    return(

        <div className='flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={rishivid} className="scale-75 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start'>
                    <div className='w-96 h-12 text-4xl bg-[#6442C2] text-[#D4D4D4] ah  flex items-center justify-center rounded-sm'>
                    Web Developer
                    </div>
                    <div className='ah pt-20 text-white text-4xl underline-offset-8 underline'>
                    Rishi<br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                    <p className='text-[#BDB7B7] text-xl pt-10 text-justify w-[90%] sm:w-[70%] '>
                    Bro’s got no chills that he drifts his car into the parking lot every morning. Sits in his workspace and unpacks his space suit like backpack and pulls out his RGB setup from the future where he spends most of his time. Rishi is a night owl. He spends time animating and perfecting designs and he never tend to get off his workspace until he gets the solution for the problem.</p>
                    </div>

                </div>
            </div>

        </div>
       
    )
}

export default RishiC