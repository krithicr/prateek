import React from 'react';

import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';


function ConnectC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);
  return (
    <div className=' bg-black h-auto m' data-aos="fade-up" data-aos-easing="ease-in-out">
      

      <div className='flex flex-col sm:flex-row items-center justify-center h-screen 'data-aos="fade-up" data-aos-easing="ease-in-out">
        
          <div className=' flex flex-col text-center lg:text-left ' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className=' '>
              <p className='text-white text-4xl sm:text-7xl font-bold ah' >
                Reach the <br></br>
                grustl Minds.
              </p>
            </div>
            <div className=' flex items-center justify-center' data-aos="fade-up" data-aos-easing="ease-in-out ">
              <p className='text-white al text-center sm:text-justify text-xl font-medium  sm:w-[657px] sm:h-[171px] sm:pt-20 pt-10 w-[80%]'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
                Maecenas vitae mattis tellus..
              </p>
            </div>

          </div>

          <div className=' lg:pt-0 pt-20 pl-0 xl:pl-20 flex items-center justify-center sm:flex-row flex-col' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='flex items-center justify-center'>
              <button className='flex items-center justify-center bg-black w-[275px] h-[75px] text-2xl font-semibold text-white  border border-gray-400 rounded-xl shadow hover:bg-white hover:text-black duration-700'>
                C O N N E C T
              </button>
            </div>

            <div>
              <p className='text-[#616161] sm:pl-10 pt-10 sm:pt-0 flex items-center justify-center font-light '>
                via calendly
              </p>
            </div>

          </div>
      </div>
    </div>
  );
}

export default ConnectC