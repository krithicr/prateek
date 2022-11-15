import React from 'react';
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';

function ConnectC() {
  useEffect(()=>{
    Aos.init({duration:3000,
      once: false,
      mirror: true,});
  }, []);
  return (
    <div className='bg-black w-screen h-screen m' data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className='flex flex-col xl:flex-row items-center justify-center ' data-aos="fade-up" data-aos-easing="ease-in-out">
        <div className='object-fill  pt-[200px]'>
          <p className='text-white text-7xl font-bold'>
              Reach the
          </p>
          <p className='text-white text-7xl font-bold'>
              grustl Minds.
          </p>
          <p className='text-white text-xl font-medium w-[657px] h-[171px] pt-20'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
          </p>
        </div>
        <div className='flex items-end justify-center pt-[430px] pl-[242px] pb-5 '>
        <button className=' flex items-center justify-center bg-black w-[275px] h-[75px] text-2xl font-semibold text-white  border border-gray-400 rounded-xl shadow hover:bg-white hover:text-black'>
            C O N N E C T
          </button>
          <p className='text-[#616161] pl-10 pb-7 font-light '>
            via calendly
          </p>
        </div>
      </div>
    </div>
  );
}
export default ConnectC