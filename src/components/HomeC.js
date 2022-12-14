import React from 'react';
import grlogo from '../images/logo.svg';
import front from '../images/front.mp4'

function HomeC() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className='h-screen w-fill select-none '>
      <div className='z-30 shadow-xl bg-blend-overlay  flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed  backdrop-blur-3xl'>
         <img src={grlogo} id="name" className=" sm:w-[10%] pr-10  w-[30%] " alt="" />
      </div>
      <video src={front}  muted autoPlay   className='sm:object-cover h-screen'/>  
    </div>
    
  );
}
export default HomeC;


 