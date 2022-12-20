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
                    <div className='w-auto h-12 text-3xl bg-[#564F3E] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al ml-5'>SEO  </p><p className='ah pl-2 mr-5'> ANALYST</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    PRATAP <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        I am a true geek who spends my days experimenting with algorithms and my nights analyzing 
                        data. I am friendly with my local pizza delivery person, who visits me at least three times 
                        a week. I am skilled at working with algorithms and know how to use them to my advantage. </p>
                    </div>
                </div>
            </div>

        </div>

        
        
    )
}

export default Pratap

