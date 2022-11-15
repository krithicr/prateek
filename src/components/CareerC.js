import React from 'react';
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';

function CareerC() {
  useEffect(()=>{
    Aos.init({duration:2000,
      once: false,
      mirror: true,});
  }, []);
  return (
    <div className='bg-white max-w-screen pb-40 '>
      <div className='flex items-center justify-start pl-20 pt-20 pb-10 z-20'data-aos="fade-up" data-aos-easing="ease-in-out">
        <span className='ah text-7xl text-black font-bold text-left w-[500px] leading-[65px]'>
        Join the life at
        grustl.
        </span>
      </div>
      <div className='flex items-center justify-center pt-0 ' >
        <div className='pr-8 flex flex-row transform transition duration-500 hover:scale-105'>
          <div class="w-[275px] h-[289px] bg-[#1E1E1E] " data-aos="zoom-in" data-aos-easing="ease-in-out">
            <div class="text-white text-right ">
              <p class="ah  text-4xl pt-10 text-right tracking-wider pr-5">
                Content
              <br></br>
              <p className='al'>
              Writer
              </p>
              </p>
              <p class="text-base font-medium text-[#ACACAC]  pt-1 pr-5 tracking-wide leading-4  ">
                make
                <br></br>
              revolutionary content.
              </p>
            </div>
          </div>
        {/* </div> */}
        <div className='bg-white w-[15px]'>
        </div>
        {/* <div className='pr-5 transform transition duration-500 hover:scale-105'> */}
          <div class="w-[572.33px] h-[289px] bg-[#EAEAEA]" data-aos="zoom-out" data-aos-easing="ease-in-out">
            <div class="text-black text-right">
              <p class="font-normal text-[15px] pt-10 w-[529px] h-[183px] pr-4  pl-4 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque.
              </p>
              <div className='pt-10 pr-10'>
                <button class="bg-[#EAEAEA] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow">
                <span>R E A C H &nbsp; U S</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pr-8 flex flex-row transform transition duration-500 hover:scale-105'>
          <div class="w-[413px] h-[289px] bg-[#EAEAEA]" data-aos="zoom-out" data-aos-easing="ease-in-out">
          <div class="text-black text-right ">
            <p class="ah  text-4xl pt-10 text-right tracking-wider pr-5">
                  Social Media
                <br></br>
                  <p className='al'>
                  Account Manager
                  </p>
              </p>
              <p class="text-base font-medium text-black  pt-1 pr-5 tracking-wide leading-4  ">
                make
                <br></br>
              revolutionary content.
              </p>
            </div>
          </div>
        {/* </div> */}
        <div className='bg-white w-[15px]'>
        </div>
        {/* <div className='pr-5 transform transition duration-500 hover:scale-110'> */}
          <div class="w-[400px] h-[289px] bg-[#1E1E1E] " data-aos="zoom-out" data-aos-easing="ease-in-out">
            <div class="text-white text-right ">
              <p class="font-normal text-[15px] pt-10 w-[341px] h-[183px] pr-7  pl-7 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              </p>
              <div className='pt-10 pr-10'>
                <button class="bg-black hover:bg-[#363636] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow">
                  R E A C H &nbsp; U S
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center pt-5'>
        <div className='pr-8 flex flex-row transform transition duration-500 hover:scale-105'>
          <div class="w-[275px] h-[310px] bg-[#EAEAEA] " data-aos="zoom-in" data-aos-easing="ease-in-out">
          <div class="text-black text-right ">
          <p class="ah   text-4xl pt-10 text-right tracking-wider pr-5">
                Graphic
              <br></br>
              <p className='al'>
              Designer
              </p>
              </p>
              <p class="text-base font-medium text-black  pt-1 pr-5 tracking-wide leading-4  ">
                make
                <br></br>
              revolutionary content.
              </p>
            </div>
          </div>
        {/* </div> */}
        <div className='bg-white w-[15px]'>
        </div>
        {/* <div className='pr-7 transform transition duration-500 hover:scale-110'> */}
          <div class="w-[275px] h-[310px] bg-[#1E1E1E] " data-aos="zoom-out" data-aos-easing="ease-in-out">
          <div class="text-white text-right">
              <p class="font-normal text-[15px] pt-10 w-[226px] h-[183px] pr-7  pl-7 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              </p>
              <div className='pt-[55px] pr-10'>
                <button class="bg-black hover:bg-[#363636]  text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow">
                <span>R E A C H &nbsp; U S</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pr-8 flex flex-row transform transition duration-500 hover:scale-105'>
          <div class="w-[567px] h-[310px] bg-[#1E1E1E] " data-aos="zoom-in" data-aos-easing="ease-in-out">
            <div class="text-white text-right ">
            <p class="ah  text-4xl pt-10 text-right tracking-wider pr-5">
                Web
              <br></br>
              <p className='al'>
              Developer
              </p>
              </p>
              <p class="text-base font-medium text-[#ACACAC] pt-1 pr-5 tracking-wide leading-4  ">
                make
                <br></br>
              revolutionary website.
              </p>
            </div>
          </div>
        {/* </div> */}
        <div className='bg-white w-[15px]'>
        </div>
        {/* <div className='pr-7 transform transition duration-500 hover:scale-110 '> */}
          <div class="w-[544px] h-[310px] bg-[#EAEAEA] " data-aos="zoom-out" data-aos-easing="ease-in-out">
            <div class="text-black text-right">
              <p class="font-normal text-[15px] pt-10 w-[529px] h-[183px] pr-4  pl-4 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque.
              </p>
              <div className='pt-[55px] pr-10'>
                <button class="bg-[#EAEAEA] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow">
                  R E A C H &nbsp; U S
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CareerC;