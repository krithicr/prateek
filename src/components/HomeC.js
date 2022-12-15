import React from 'react';
import grlogo from '../images/logo.svg';
import front from '../images/front.mp4'

function HomeC() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className='h-screen w-fill select-none front'>
      
      <div className='z-50 shadow-xl bg-blend-overlay  flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed  backdrop-blur-3xl'>
         <img src={grlogo} id="name" className=" sm:w-[10%] pr-10  w-[30%] " alt="" />
      </div>
      <div className=' sm:hidden flex h-screen items-center justify-center'>
        <div className='gruss'>
          <img src={require('../images/GRUS.gif')} className="gruss -h" alt="Grustl-gif" />
        </div>
      </div>
      <video src={front}  muted autoPlay   className='sm:object-cover h-screen sm:flex hidden '/>  
      
    </div>
    
  );
}
export default HomeC;


 