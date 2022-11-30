import React from 'react';
import thikshavid from '../images/thikshavid.gif'

 
function ThikshaC() {
    return(

        <div className='flex flex-row w-fill   h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten'>
            <img src={thikshavid} className="scale-75 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col '>
                    <div className='w-96 h-12 text-4xl bg-[#428DC2] text-[#D4D4D4] ah  flex items-center justify-center rounded-sm'>
                    Content Strategist
                    </div>
                    <div className='ah pt-20 text-white text-4xl underline-offset-8 underline'>
                    Thiksha<br></br>
                    </div>
                    <div>
                    <p className='text-[#BDB7B7] text-xl pt-10 text-justify w-[70%] '>
                    Like every gang has someone who turns up late to work, here she’s the one. But manages to get things done in a snap. Spends a lot of time brainstorming her inspiration ideas to the team. But this kid’s got sales in her Dna, she can sell out events in a blink.</p>
                    </div>

                </div>
            </div>

        </div>
       
    )
}

export default ThikshaC