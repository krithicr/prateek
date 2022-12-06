import Aos from 'aos';
import"aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';
import guna from '../images/guna.png'
import rishi from '../images/rishi.png'
import kiran from '../images/kiran.png'


function MancaveC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

 

  return (
    <div className='h-auto flex flex-col items-center justify-center bg-black ' data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className='bg-black h-[60%] pt-96 sm:pt-0 sm:h-screen flex items-center justify-center w-full'  >
        <div className=" " data-Aos="fade-up fade-out" data-aos-delay="400">
          <div  className='ah  bg-black flex flex-col  text-7xl xl:text-9xl gap-0  text-white   justify-center  z-50  fade fadeIn'  >
              <p className='' >the <br></br>
              mancave.
              </p>
          </div>
        </div>
      </div>

      <div className='h-auto w-auto  flex flex-row items-center justify-center bg-black'>
        <div className='flex flex-row text-white  items-center justify-center '>
          <img src={guna} className=" z-10 translate-x-[50px] duration-700 hover:-translate-x-[5px] saturate-0 hover:saturate-100 scale-90 bg-black shadow-2xl" alt="guna"></img>
        </div>
        <div className='flex flex-row text-white  items-center justify-center  '>
          <img src={rishi} className="z-20 -translate-x-[100px] duration-700 hover:-translate-x-[120px] saturate-0 hover:saturate-100  scale-90  bg-black shadow-2xl" alt="guna"></img>
        </div>
        <div className='flex flex-row text-white  items-center justify-center '>
          <img src={kiran} className=" z-30 -translate-x-[200px] duration-700  hover:-translate-x-[220px] saturate-0 hover:saturate-100  scale-90 bg-black shadow-2xl" alt="guna"></img>
        </div>
        <div className='flex flex-row text-white  items-center justify-center '>
          <img src={kiran} className=" z-40 -translate-x-[320px] duration-700 hover:-translate-x-[350px] saturate-0 hover:saturate-100  scale-90 bg-black shadow-2xl" alt="guna"></img>
        </div>
        <div className='flex flex-row text-white  items-center justify-center '>
          <img src={kiran} className=" z-40 -translate-x-[450px] duration-700 saturate-0 hover:saturate-100  scale-90 bg-black shadow-2xl" alt="guna"></img>
        </div>

      </div>



     
  

   
     </div>
    );
}

export default MancaveC;


