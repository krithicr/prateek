import React from 'react';
import grlogo from '../images/logo.svg';
import front from '../images/front.mp4'

function HomeC() {
  
  return (
    <div className='h-screen w-fill'>
      <div className='z-50 shadow-xl bg-blend-overlay  flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed backdrop-blur-3xl'>
         <img src={grlogo} id="name" className=" sm:w-[10%] pr-10  w-[30%]   " alt="" />
      </div> 
      <video src={front}  muted autoPlay controls = ''  className='sm:object-cover sm:h-screen'/> 
    </div>
    
  );
}
export default HomeC;


 