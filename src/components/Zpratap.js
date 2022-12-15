import React from 'react';
import pratapvid from '../images/pratapvid.gif'

 
function Pratap() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(
        <div className=' select-none flex flex-col sm:flex-row w-fill   h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={pratapvid} className="scale-50 sm:scale-100 mix-blend-difference" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-[420px] h-12 text-3xl bg-[#564F3E] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>SEO  </p><p className='ah pl-2'> ANALYST</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    PRATAP <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        This Dawg is a Geek. Plays trial and error game with algorithms of various mediums by the day and turns into a data analyst by night. His No. 1 friend being the pizza delivery guy that he gets to greet him atleast thrice a week. Man knows how to play the algorithm game right. </p>
                    </div>
                </div>
            </div>

        </div>

        
        
    )
}

export default Pratap

