import React from 'react';

import kiranvid from '../images/kiranvid.gif'

 
function Kiran() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(

        <div className=' select-none flex flex-col sm:flex-row w-fill   h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={kiranvid} className="scale-50 sm:scale-100 mix-blend-difference" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-[420px] h-12 text-3xl bg-[#296152] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>STUDIO  </p><p className='ah pl-2'>TASK MASTER</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Kiran <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        As the supervisor and coordinator of the studio, I am responsible for ensuring that 
                        our goals are met. I am known for my attention to detail and thorough knowledge of 
                        the studio's operations. I have consistently demonstrated my reliability and punctuality, 
                        making me a valuable asset to our team. </p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Kiran