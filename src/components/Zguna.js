import React from 'react';


import gunavid from '../images/1.gif'

 
function Guna() {
    return(

        <div className='flex flex-row w-fill   h-screen bg-black gunabg  '>
            <div className='basis-1/2 items-center justify-center flex   mix-blend-lighten'>
                <img src={gunavid} className="  mix-blend-difference z-50 " alt="guna"></img>

            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col '>
                    <div className='w-96 h-12 text-4xl bg-[#428DC2] text-[#D4D4D4] ah  flex items-center justify-center rounded-sm'>
                    Full Stack Developer
                    </div>
                    <div className='ah pt-20 text-white text-4xl underline-offset-8 underline'>
                    Guna <br></br>
                    </div>
                    <div>
                    <p className='text-[#BDB7B7] text-xl pt-10 text-justify w-[70%] '>
                    Pure Tech Junkie who steps into the office in the morning with a snack in his left hand and a  log book to debug the previous days bugs in his right hand. He Loves his coffee soo much that he can chug 11 cups of coffee a day and still feel the caffeine rush is insufficient. </p>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Guna