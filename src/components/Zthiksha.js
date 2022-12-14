import React from 'react';
import thikshavid from '../images/thikshavid.gif'

 
function ThikshaC() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(

        <div className='select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={thikshavid} className="kittyvid mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-[420px] h-12 text-3xl bg-[#6C553D] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>CONTENT  </p><p className='ah pl-2'>STRATEGIST</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Thiksha <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        Like every gang has someone who turns up late to work, here she’s the one. But manages to get things done in a snap. Spends a lot of time brainstorming her inspiration ideas to the team. But this kid’s got sales in her Dna, she can sell out events in a blink.</p>
                    </div>
                </div>
            </div>
        </div>
        
        
       
    )
}

export default ThikshaC

