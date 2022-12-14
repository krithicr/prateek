import React from 'react';
import kittyvid from '../images/kittyvid.gif'

 
function KittyC() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return(

        <div className='select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={kittyvid} className="scale-50 sm:scale-100 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <div className='w-[440px] h-12 text-3xl bg-[#6C553D] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al'>SOCIAL MEDIA  </p><p className='ah pl-2'>STRATEGIST</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Kitty <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        Enthusiasm and Charisma all packed into a small package. She keeps tracking engagement and insights and learn new stuff everyday . She carries forward an aesthetic vision which is vey evident in all her works. This kiddo has all that it needs for a perfect social outlook.</p>
                    </div>
                </div>
            </div>

        </div>
        
        
       
    )
}

export default KittyC

