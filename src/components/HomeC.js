import React from 'react';
import grlogo from '../images/grlogo.png';

function HomeC() {
  
  return (
    <div className='front w-fill  h-fill sm:h-screen ' > 
      <div className='z-50 shadow-2xl bg-blend-overlay  flex place-content-end items-center  w-full h-20 sm:h-[100px] fixed backdrop-blur-3xl'>
            <img src={grlogo} id="name" className=" sm:w-auto scale-80 w-[30%] sm:scale-75    " alt="" />
      </div> 
      <div class=" w-fill h-screen flex justify-center items-center  " > 
        <div class="absolute inset-0 flex justify-center items-center  ">
            <img src={require('../images/GRUS.gif')} className="object-contain max-h-screen" alt="Grustl-gif" />
        </div>
      </div>
    </div> 
  );
}
export default HomeC;