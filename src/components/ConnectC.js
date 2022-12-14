import React from 'react';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';


function ConnectC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

  document.addEventListener('contextmenu', event => event.preventDefault());

  return (
    <div className=' bg-black h-auto m select-none' data-aos="fade-up" data-aos-easing="ease-in-out">
      

      <div className='flex flex-col sm:flex-row items-center justify-center h-screen 'data-aos="fade-up" data-aos-easing="ease-in-out">
        
          <div className=' flex flex-col text-center lg:text-left ' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className=' '>
              <p className='text-white text-4xl sm:text-7xl font-bold ah' >
                Reach the <br></br>
                grustl Minds.
              </p>
            </div>
            <div className=' flex items-center justify-center' data-aos="fade-up" data-aos-easing="ease-in-out ">
              <p className='text-white al text-center sm:text-justify text-xl font-medium  sm:w-[607px] sm:h-[171px] sm:pt-20 pt-10 w-[80%]'>
              Find your convenient time on Grustl’s calendar to schedule your call today and we look forward to speaking to you soon! 
              By the end of this meeting session you’ll get a clear cut idea on how we at Grustl are different from rest of the agencies.

              </p>
            </div>

          </div>

          <div className=' lg:pt-0 pt-20 pl-0 xl:pl-20 flex items-center justify-center sm:flex-row flex-col' data-aos="fade-up" data-aos-easing="ease-in-out">
            <Link className='connetform' to='/Connect/connectfrom'>
              <button className='flex items-center justify-center bg-black w-[275px] h-[75px] text-2xl font-semibold text-white  border border-gray-400 rounded-xl shadow hover:bg-white hover:text-black duration-700'>
                C O N N E C T
              </button>              
            </Link> 

            

          </div>
      </div>
    </div>
  );
}

export default ConnectC