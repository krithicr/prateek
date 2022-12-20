import React from 'react';
import sriramvid from '../images/sriramvid.gif'

 
function Sriram() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(
        <div className=' select-none flex flex-col sm:flex-row w-fill   h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={sriramvid} className="scale-50 sm:scale-75 mix-blend-difference" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-auto mz h-12 text-3xl bg-[#564F3E] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al ml-5'>MERCHANDISE   </p><p className='ah pl-2 mr-5'> CONSULTANT</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    SRIRAM <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        I am the driving force behind all of the custom resources that we have. From Grustl merch 
                        to custom Grustl notepads, I am responsible for ensuring that everything is taken care of and 
                        that the job is done. My dedication and hard work make me an invaluable member of our team. </p>
                    </div>
                </div>
            </div>

        </div>

        
        
    )
}

export default Sriram

