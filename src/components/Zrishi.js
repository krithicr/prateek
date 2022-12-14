import React from 'react';
import rishivid from '../images/rishivid.gif'

 
function RishiC() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(

        <div className=' select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={rishivid} className="scale-50 sm:scale-100 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-[420px] h-12 text-3xl bg-[#225BBB] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>WEB </p><p className='ah pl-2'>DEVELOPER</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                        Rishi <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        Bro’s got no chills that he drifts his car into the parking lot every morning. Sits in his workspace and unpacks his space suit like backpack and pulls out his RGB setup from the future where he spends most of his time. Rishi is a night owl. He spends time animating and perfecting designs and he never tend to get off his workspace until he gets the solution for the problem. </p>
                    </div>
                </div>
            </div>

        </div>
       
    )
}

export default RishiC