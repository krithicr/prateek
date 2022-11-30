import React from 'react';

import kiranvid from '../images/kiranvid.gif'

 
function Kiran() {
    return(

        <div className='flex flex-row w-fill   h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
            <img src={kiranvid} className="scale-75 mix-blend-difference" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col '>
                    <div className='w-96 h-12 text-4xl bg-[#C29742] text-[#D4D4D4] ah  flex items-center justify-center rounded-sm'>
                    Studio Task Master
                    </div>
                    <div className='ah pt-20 text-white text-4xl underline-offset-8 underline'>
                    Kiran <br></br>
                    </div>
                    <div>
                    <p className='text-[#BDB7B7] text-xl pt-10 text-justify w-[70%] '>
                    This guy is the real deal.. He is the light house of entertainment of the grustl house and keeps everyone occupied. The day he doesn’t turn up it’s a dull day here. He is the Gate Keeper and has passed the punctuality check. Bro is the Real G
                     </p>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Kiran