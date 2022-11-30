import React from 'react';

import pratapvid from '../images/pratapvid.gif'

 
function Pratap() {
    return(

        <div className='flex flex-row w-fill   h-screen bg-black gunabg  '>
            <div className='basis-1/2 items-center justify-center flex   mix-blend-lighten'>
                <img src={pratapvid} className="  mix-blend-difference z-50 " alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col '>
                    <div className='w-96 h-12 text-4xl bg-[#428DC2] text-[#D4D4D4] ah  flex items-center justify-center rounded-sm'>
                    SEO Analyst
                    </div>
                    <div className='ah pt-20 text-white text-4xl underline-offset-8 underline'>
                    Prathap <br></br>
                    </div>
                    <div>
                    <p className='text-[#BDB7B7] text-xl pt-10 text-justify w-[70%] '>
                    This Dawg is a Geek. Plays trial and error game with algorithms of various mediums by the day and turns into a data analyst by night. His No. 1 friend being the pizza delivery guy that he gets to greet him atleast thrice a week. Man knows how to play the algorithm game right. </p>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Pratap