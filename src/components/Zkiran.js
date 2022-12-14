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
                    <div className='w-[420px] h-12 text-3xl bg-[#B29A73] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>STUDIO  </p><p className='ah pl-2'>TASK MASTER</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Kiran <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        This guy is the Real Deal. He is the light house of entertainment of the Grustl House and keeps everyone occupied. The day he doesn’t turn up it’s a dull day here. He is the Gate Keeper and has passed the punctuality check. Bro is the Real G. </p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Kiran